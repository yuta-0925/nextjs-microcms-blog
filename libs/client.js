import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-tutorial-1",
  apiKey: process.env.API_KEY,
});
