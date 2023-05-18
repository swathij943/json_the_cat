//import 'request' mtd that allow us to make a HTTP requests
//using process.argv to retrive breed name from the command-line arguments
//construct the API url
//making a HTTP request - request fn calls url & provides a cb to handle the response
//when the 'request' fn calls the url - it sends a HTTP GET request to the specified url & provides a cb fn to handle response

const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Invalid response status code:', response.statusCode);
  } else {
    const data = JSON.parse(body); //response body parsed to JSON.parse
    if (data.length === 0) {
      console.log(`Breed '${breedName}' not found.`);
    } else {
      const breed = data[0];
      console.log('Description:', breed.description);
    }
  }
});

