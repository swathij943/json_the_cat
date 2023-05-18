# Cats as a Service

Scan through these APIs and identify the API URL/endpoint which will return specific cat breed results.

The particular endpoint that will allow us to search breed information is: https://api.thecatapi.com/v1/breeds/search.

Enter the API endpoint/URL into the browser, searching for the breed Siberian.


This particular search endpoint requires a query, and without one it simply returns an empty dataset in the form of an empty array:[ ]

It looks like only one object is returned for our query, which is fine.

Let's make this request from our node app now!

Implementing in Node

Instruction

Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.