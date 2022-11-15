import axios from "axios";

const headers = {
  Accept: "*/*",
  "Access-Control-Allow-Origin": "*",
};

export const getShortURL = async (prop) => {
  return await axios
    .get(`https://cors-anywhere.herokuapp.com/https://ulvis.net/API/write/get?url=${prop.target.value}&type=json`, {
      headers,
    })
    .catch((e) => {
      console.log("getShortURL::ERR " + e);
    });
};
