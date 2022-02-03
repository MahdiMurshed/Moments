import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

//runs before each request for authorization purposes
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (formData) => API.post("/user/signin", formData);
export const signup = (formData) => API.post("/user/signup", formData);
export const createPost = (newPost) => API.post("/posts", newPost);
export const getPosts = (page) => API.get(`/posts?page=${page}`);
