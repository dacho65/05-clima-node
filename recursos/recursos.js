listadoPorHacer = [];

const cargarDB = () =>{
	
	try {
		
		listadoPorHacer = require('./recursos/climas.json');
		return listadoPorHacer;

	} catch (error) {

		listadoPorHacer = [];
		return listadoPorHacer;
		
	}

}

export.module = {
	cargarDB
}
