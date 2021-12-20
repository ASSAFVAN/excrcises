import axios from "axios";

const KEY = "AIzaSyDrbKgfG00PZz2yeaV8kMyeJkX1T5gNhzM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
