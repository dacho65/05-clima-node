const axios = require('axios');

const getClima = async ( nombre ) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ nombre }&appid=c81cd51fa8e13ad558edd398016d0333&units=metric`)
	return resp.data.main.temp;
}


module.exports = {
	getClima
}
