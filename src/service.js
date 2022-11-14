import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Accept":"*/*"
};

export const getShortURL = async (prop) => {
  return await axios.get(`https://ulvis.net/API/write/get?url=${prop.target.value}&type=json`, {
    headers,
  }).catch((e)=>{console.log("getShortURL::ERR "+e)});
};
