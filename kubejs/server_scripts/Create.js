// priority: 0
ServerEvents.recipes(event => {
	let incLVCirc = 'kubejs:incomplete_lv_circuit'
	//#region circuits
	event.recipes.createSequencedAssembly([
	'gtceu:basic_electronic_circuit',
],	'gtceu:resin_printed_circuit_board', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:resistor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:vacuum_tube']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:red_alloy_single_cable'])
	]).transitionalItem(incLVCirc).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:basic_integrated_circuit',
], 'gtceu:resin_printed_circuit_board',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:resistor']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:diode']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:tin_bolt']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:copper_fine_wire']),
	event.recipes.createFilling(incLVCirc, [incLVCirc, Fluid.of('gtceu:soldering_alloy', 36)])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:good_electronic_circuit',
], 'gtceu:phenolic_printed_circuit_board',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:basic_electronic_circuit']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:diode']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, '#forge:plates/steel'])
	]).transitionalItem(incLVCirc).loops(3)
	//#endregion
	//#region lv components
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_motor',
],	'gtceu:magnetic_iron_rod', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:iron_rod'])
	]).transitionalItem(incLVCirc).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_motor',
],	'gtceu:magnetic_steel_rod', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:copper_single_wire']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_rod'])
	]).transitionalItem(incLVCirc).loops(3)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_piston',
],	'gtceu:lv_electric_motor', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_small_gear']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_plate'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_robot_arm',
],	'gtceu:lv_electric_piston', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/lv']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_rod'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_conveyor_module',
],	'gtceu:tin_single_cable', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:lv_electric_motor'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_electric_pump',
],	'gtceu:bronze_normal_fluid_pipe', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:lv_electric_motor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_screw']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_rotor']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_fluid_regulator',
],	'gtceu:lv_electric_piston', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/lv'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_sensor',
],	'gtceu:basic_electronic_circuit', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_double_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:steel_double_plate']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:brass_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:quartzite_gem'])
	]).transitionalItem(incLVCirc).loops(1)
	event.recipes.createSequencedAssembly([
	'gtceu:lv_emitter',
],	'gtceu:quartzite_gem', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/lv']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:tin_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:brass_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:brass_rod'])
]).transitionalItem(incLVCirc).loops(2)
//#endregion

	//#region mv components
	event.recipes.createSequencedAssembly([
		'gtceu:mv_electric_motor',
], 'gtceu:magnetic_steel_rod',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:cupronickel_double_wire']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:cupronickel_double_wire']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:aluminium_rod']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:copper_single_cable'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:mv_electric_piston',
], 'gtceu:mv_electric_motor',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:aluminium_plate']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:aluminium_small_gear']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:aluminium_rod']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:copper_single_cable'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:mv_robot_arm',
], 'gtceu:mv_electric_piston',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, '#forge:circuits/mv']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:mv_electric_motor']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:aluminium_rod']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:copper_single_cable'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:mv_conveyor_module',
], 'gtceu:copper_single_cable',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:mv_electric_motor']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:rubber_plate']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:rubber_plate']),
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:mv_electric_pump',
], 'gtceu:steel_normal_fluid_pipe',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:bronze_screw']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:bronze_rotor']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:rubber_ring']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:copper_single_cable']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc, 'gtceu:mv_electric_motor']),
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
	'gtceu:mv_fluid_regulator',
],	'gtceu:mv_electric_piston', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/mv'])
	]).transitionalItem(incLVCirc).loops(2)
	event.recipes.createSequencedAssembly([
		'gtceu:mv_sensor',
],	'gtceu:electrum_rod',[
	event.recipes.createDeploying(incLVCirc,[incLVCirc,'#forge:circuits/mv']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc,'gtceu:aluminium_double_plate']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc,'gtceu:aluminium_double_plate']),
	event.recipes.createDeploying(incLVCirc,[incLVCirc,'gtceu:emerald_flawless_gem']),
	]).transitionalItem(incLVCirc).loops(1)
	event.recipes.createSequencedAssembly([
	'gtceu:mv_emitter',
],	'gtceu:emerald_flawless_gem', [
	event.recipes.createDeploying(incLVCirc, [incLVCirc, '#forge:circuits/mv']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:copper_single_cable']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:electrum_rod']),
	event.recipes.createDeploying(incLVCirc, [incLVCirc, 'gtceu:electrum_rod']),
]).transitionalItem(incLVCirc).loops(2)
	// #endregion
})