const clima = require ('./clima/clima');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad',
		demand: true
	}

}).argv;

//clima.getClima(argv.direccion)
//		.then( console.log )
//		.catch( console.log );

const getInfo = async ( direccion ) => {
	try {
		const temp = await clima.getClima( argv.direccion);
		return `El clima de ${ direccion } es de ${ temp } grados centigrados`;
	} catch ( e ) {
		return `No se pudo determiar el clima de ${argv.direccion}`;
	}
}

getInfo(argv.direccion)
	.then( console.log )
	.catch( console.log ); 

