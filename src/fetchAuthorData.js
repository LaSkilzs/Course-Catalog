// NOTE: this file is only necessary for bonus objective #1

const authorEndpoint =
  "https://s3.us-east-2.amazonaws.com/codecademy-interview/entities.json";

const proxyEndpoint = "https://cors-anywhere.herokuapp.com/";

// // make a GET request to the above endpoint to get author data

const fetchAuthorData = async () => {
  try {
    let response = await fetch(proxyEndpoint + authorEndpoint);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export default fetchAuthorData;
