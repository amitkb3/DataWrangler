// const fs = require('fs');

// // Reading a text file into memory
// fs.readFile("./data/earthquakes.csv","utf8",
//  (err,textFileData) => {
//    if(err) {
//      console.error("An error occured!");
//      return;
//    }

//    console.log(textFileData);
//  }
// )

//Loading a text file with the promise-based read function

// const file = require('../toolkit/file.js')

// file.read("./data/earthquakes.csv")
//     .then(textFileData => {
//        console.log(textFileData);
//     })
//     .catch(err => {
//       console.error("An error occured!");
//     });

// Loading Data from REST API

// Using Axios

// const axios = require('axios');

// const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// axios.get(url)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Using request-promise package
// const request = require('request-promise');

// const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// request.get(url)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);
//     });


// Importing data from earthquakes.json

// const importJsonFile = require('../toolkit/importJsonFile.js');

// importJsonFile("./data/earthquakes.json")
//    .then(data => {
//      console.log(data);
//    })
//    .catch(err => {
//      console.error("An error occured.");
//      console.error(err.stack);
//    });

//Importing earthquakes json data from REST API

// const importJsonFromRestApi = require('../toolkit/importJsonFromRestApi.js');


//   const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_mont[CA]h.geojson";

//   importJsonFromRestApi(url)     
//     .then(data => {   
//       const earthquakes = data.features.map(feature => {   
//             const earthquake = Object.assign({},    
//             feature.properties,   
//             { id: feature.id } 
//             );   
//             return earthquake;
//         });
//         console.log(earthquakes[1]);   
//     })    
//     .catch(err => {   
//         console.error("An error occurred.");    
//         console.error(err.stack);   
//     });     
 