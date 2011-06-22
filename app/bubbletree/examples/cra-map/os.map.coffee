# Let's drop a line of comment into the JS file 
### 
* Important note:
*
* The source of this JS file is auto-generated by CoffeeScript.
* Changes made here will be overwritten. Please make your changes
* in os.map.coffee
*
###

class OpenSpending.Map
	constructor: (@svgSrc, @container, @mode = 'percapita') ->
		@loadSVG()
		
	loadSVG: ->
		$.ajax 
			url: @svgSrc
			context: @
			success: @svgLoaded
		return
		
	svgLoaded: (svg) ->
		@mapSrcWidth = @valueFromPixel svg.childNodes[2].getAttribute 'width'
		@mapSrcHeight = @valueFromPixel svg.childNodes[2].getAttribute 'height'
		#@mapSrcHeight -= 238
		
		paths = svg.getElementsByTagName 'path'
		regionMapSrc = {}
		@populationPerRegion = {}
		
		for path in paths
			if path.getAttribute? and path.getAttribute('class') is 'region' and path.getAttribute('d')?
				region_id = path.getAttribute 'region'
				regionMapSrc[region_id] ?= []
				regionMapSrc[region_id].push path.getAttribute 'd'
				@populationPerRegion[region_id] = path.getAttribute('population') if path.getAttribute('population')? 
				
		@mapSrc = regionMapSrc
		@initMap()
		return
		
	valueFromPixel: (px) ->
		Number px.substr(0, px.length-2)
	
	initMap: ->
		# create raphael instance for the map
		# create all path instances
		@paper = new Raphael @container[0], @container.width(), @container.height()
		@paths = []
		@pathsByRegion = {}
		for id, pathSrcs of @mapSrc
			@pathsByRegion[id] = []
			for ps in pathSrcs
				path = @createPath ps
				@paths.push path
				path.node.setAttribute 'region:id', id
				path.node.setAttribute 'map:instance', @
				@pathsByRegion[id].push path
				$(path.node).tooltip
					delay: 100
					bodyHandler: @getRegionTooltip
		
		@scaleMap()
		$(window).resize @scaleMap.bind(@);
		return
		
	createPath: (src) ->
		path = @paper.path(src).attr
			fill: '#ccc'
			stroke: no
	
	getRegionTooltip: ->
		map = @getAttribute 'map:instance'
		rid = @getAttribute 'region:id'
		@getAttribute 'tooltip'
	
	scaleMap: ->
		# rescale map to fit container bounds
		[w, h] = [@container.width(), @container.height()]
		@paper.setSize w, h 
		scale = Math.min h * 0.85 / @mapSrcHeight, w * 0.85 / @mapSrcWidth
		xo = (w - @mapSrcWidth * scale) * 0.5
		yo = (h - @mapSrcHeight * scale) * 0.5 
		
		transform = "scale("+scale+") translate("+xo*scale+", "+yo*scale+")"
		
		for path in @paths
			path.node.setAttribute "transform", transform 
	
		
		return 
	
	updateValues: (node) ->
		@currentNode = node
		total = node.amount
		
		console.log 'map.mode = ',@mode  
		
		ma = 0
		
		for id, subnode of node.breakdowns
			if @pathsByRegion[id]?
				population = @populationPerRegion[id]
				switch @mode
					when 'total' then ma = Math.max(ma, subnode.amount) 
					when 'percapita' then ma = Math.max(ma, subnode.amount / population)
					else vis4.log 'unsupported map mode '+@mode
		
		for id, paths of @pathsByRegion
			vis4.log id, paths
			if node.breakdowns[id]?
				subnode = node.breakdowns[id]
				population = @populationPerRegion[id]
				switch @mode
					when 'total' then color = vis4color.fromHSL(330, .3, .9 - subnode.amount / ma * .5).x
					when 'percapita' then color = vis4color.fromHSL(330, .3, .9 - (subnode.amount / population) / ma * .5).x
					else vis4.log 'unsupported map mode '+@mode
				
				tooltip =  '<div class="label">'+subnode.label+'</div><div>Total: <span  class="amount">'+subnode.famount+'</span> ('+Math.round(subnode.amount/node.amount*100)+'%)</div>'
			else
				tooltip = '<div class="label"></div><div>n/a</div>'
				color = '#bbb'
				
			for path in paths
				path.node.setAttribute 'tooltip', tooltip
				path.animate
					fill: color, 300
				
		return