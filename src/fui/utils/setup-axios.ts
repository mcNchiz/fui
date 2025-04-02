import axios from "axios";

export const setupAxios = (token: string)=>{
  console.log("token")
  if (token) {
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
  } else {
    console.error("CSRF token not found in the document.");
  }
}