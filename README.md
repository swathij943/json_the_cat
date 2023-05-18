# Cats as a Service

Scan through these APIs and identify the API URL/endpoint which will return specific cat breed results.

The particular endpoint that will allow us to search breed information is: https://api.thecatapi.com/v1/breeds/search.

Enter the API endpoint/URL into the browser, searching for the breed Siberian.


This particular search endpoint requires a query, and without one it simply returns an empty dataset in the form of an empty array:[ ]


If we set a search parameter though, we get back an array of results:

[
  {
    weight: {
      imperial: "8 - 16",
      metric: "4 - 7"
    },
    id: "sibe",
    name: "Siberian",
    cfa_url: "http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx",
    vetstreet_url: "http://www.vetstreet.com/cats/siberian",
    vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/siberian",
    temperament: "Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate",
    origin: "Russia",
    country_codes: "RU",
    country_code: "RU",
    description: "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ",
    life_span: "12 - 15",
    indoor: 0,
    lap: 1,
    alt_names: "Moscow Semi-longhair, HairSiberian Forest Cat",
    adaptability: 5,
    affection_level: 5,
    ...
  }
]

It looks like only one object is returned for our query, which is fine.

Let's make this request from our node app now!

Implementing in Node

Instruction

Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.