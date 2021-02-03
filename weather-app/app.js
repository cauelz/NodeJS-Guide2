const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=14a6105b14fae7b711080e471089237c&query=New%20York';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
})
