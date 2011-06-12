/*
 * BubbleTree Style for COFOG taxonomy
 *
 */
 
if (!OpenSpending || !OpenSpending.BubbleTree) window.alert('You must include the BubbleTree before including the styles');

OpenSpending.BubbleTree.Styles.ITBFunction = {
	/*'01': { icon: 'icons/government-uk.svg' },
	'01.1': { icon: 'icons/legislative.svg' },
	'01.1.1': { icon: 'icons/legislative.svg' },
	'01.1.2': { icon: 'icons/pig.svg' },
	'01.1.3': { icon: 'icons/worldmap.svg' },
	'01.2': { icon: 'icons/aid.svg' },
	'01.2.1': { icon: 'icons/aid-developing-countries.svg' },
	'01.2.2': { icon: 'icons/economic-aid.svg' },
	'01.3': { icon: 'icons/misc-services.svg' },
	'01.3.1': { icon: 'icons/human-resources.svg' },
	'01.3.2': { icon: 'icons/planning.svg' },
	'01.3.3': { icon: 'icons/research.svg' },
	'01.7': { icon: 'icons/public-debt.svg' },
	'02': { icon: 'icons/defence.svg' },
	'02.1': { icon: 'icons/military.svg' },
	'02.2': { icon: 'icons/civil-defence.svg' },
	'02.3': { icon: 'icons/foreign-military-aid.svg' },
	'02.4': { icon: 'icons/defence-research.svg' },
	'02.5': { icon: 'icons/defence-admin.svg' },
	'03': { icon: 'icons/order-safety.svg' }, 
	'03.1': { icon: 'icons/police.svg' },
	'03.2': { icon: 'icons/fire-brigade.svg' },
	'03.3': { icon: 'icons/courts.svg' },
	'03.4': { icon: 'icons/prisons.svg' },
	'03.5': { icon: 'icons/rd-order-safety.svg' },
	'03.6': { icon: 'icons/admin-order-safety.svg' },					
	'04': { icon: 'icons/social-systems.svg' }, 
	'04.1': { icon: 'icons/social-systems.svg' },
	'04.1.1': { icon: 'icons/social-systems.svg' },
	'04.1.2': { icon: 'icons/labour.svg' },					
	'04.2': { icon: 'icons/farms.svg' },
	'04.2.1': { icon: 'icons/farms.svg' },
	'04.2.2': { icon: 'icons/forest.svg' },
	'04.2.3': { icon: 'icons/fishing.svg' },				
	'04.3': { icon: 'icons/energy.svg' },
	'04.3.1': { icon: 'icons/coal.svg' },
	'04.3.2': { icon: 'icons/petrol.svg' },
	'04.3.3': { icon: 'icons/nuclear.svg' },
	'04.3.4': { icon: 'icons/fuel.svg' },
	'04.3.5': { icon: 'icons/electricity.svg' },
	'04.3.6': { icon: 'icons/wind.svg' },
	'04.4': { icon: 'icons/manufactoring-construction.svg' },
	'04.5': { icon: 'icons/transport.svg' },
	'04.5.1': { icon: 'icons/car.svg' },
	'04.5.2': { icon: 'icons/anchor.svg' },
	'04.5.3': { icon: 'icons/railways.svg' },
	'04.5.4': { icon: 'icons/airplane.svg' },
	
	'04.6': { icon: 'icons/police.svg' },
	'04.7': { icon: 'icons/police.svg' },
	'04.8': { icon: 'icons/rd-eco.svg' },
	'04.9': { icon: 'icons/police.svg' },
	'05': { icon: 'icons/environment.svg' },	
	'05.1': { icon: 'icons/waste.svg' },
	'05.2': { icon: 'icons/toilet.svg' },
	'05.3': { icon: 'icons/pollution.svg' },
	'05.4': { icon: 'icons/tree.svg' },
	'05.6': { icon: 'icons/environment-admin.svg' },
	'06': { icon: 'icons/our-streets.svg' },		
	'06.1': { icon: 'icons/housing.svg' },		
	'06.2': { icon: 'icons/community.svg' },
	'06.3': { icon: 'icons/water.svg' },
	'06.4': { icon: 'icons/street-lights.svg' },	
	'07': { icon: 'icons/health.svg' },											'07.1': { icon: 'icons/medical-supplies.svg' },				
	'07.1.1': { icon: 'icons/medical-supplies.svg' },				
	'07.1.2': { icon: 'icons/other-medical-products.svg' },				
	'07.1.3': { icon: 'icons/wheelchair.svg' },
		'07.2.1': { icon: 'icons/health.svg' },
	'07.2.2': { icon: 'icons/microscope.svg' },
	'07.2.2': { icon: 'icons/dental.svg' },
	'07.3': { icon: 'icons/hospital.svg' },
	'07.3.1': { icon: 'icons/hospital.svg' },
	'07.3.2': { icon: 'icons/hospital-specialized.svg' },
	'07.3.2': { icon: 'icons/dental.svg' },
	'08': { icon: 'icons/culture.svg' },					
	'08.2': { icon: 'icons/culture.svg' },					
	'08.1': { icon: 'icons/sports.svg' },	
	'08.3': { icon: 'icons/media.svg' },	
	'09': { icon: 'icons/education.svg' },				
	
	'10.1': { icon: 'icons/helping-others.svg' },
	'10.1.2': { icon: 'icons/helping-others.svg' }*/	

	'5': { icon: 'icons/education.svg' },
	'9': { icon: 'icons/housing.svg' },
	
	'19': { icon: 'icons/transport.svg' },
	'24': { icon: 'icons/island.svg' },
	'15': { icon: 'icons/waste.svg' },
	'20': { icon: 'icons/car.svg' },
	'28': { icon: 'icons/construction.svg' },
	'22': { icon: 'icons/farms.svg' },
	'2': { icon: 'icons/defence.svg' },
	'1': { icon: 'icons/admin.svg' },
	'8': { icon: 'icons/culture.svg' },
	'26': { icon: 'icons/manufactoring-construction.svg' },
	'11': { icon: 'icons/helping-others.svg' },
	'13': { icon: 'icons/water.svg' },
	
	'12': { icon: 'icons/water.svg' },
	'21': { icon: 'icons/satellite-dish.svg' },
	'10': { icon: 'icons/health.svg' },
	'18': { icon: 'icons/helping-others.svg' },
	'16': { icon: 'icons/toilet.svg' },
	'7': { icon: 'icons/research.svg' },
	'3': { icon: 'icons/order-safety.svg' },
	'4': { icon: 'icons/courts.svg' },
	'27': { icon: 'icons/energy2.svg' },
	'14': { icon: 'icons/environment.svg' },
	
};