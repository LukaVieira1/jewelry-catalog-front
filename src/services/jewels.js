import client from "../providers/client";

export const getAllJewels = (params) => client.get("/jowels");

export const postPetweet = (data) => client.post("/jowels", data);
