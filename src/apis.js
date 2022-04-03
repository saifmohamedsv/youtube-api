import axios from "axios";
const KEY = "AIzaSyCUOfCy8SluyVAM8turgrXP5VOjV9HJrEU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    type: "video",
    key: KEY,
  },
});
