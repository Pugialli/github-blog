import axios from "axios";

export interface profileResponse {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  name: string;
  company: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  following: number;
}

export const api = axios.create({
  baseURL: "https://api.github.com/",
});
