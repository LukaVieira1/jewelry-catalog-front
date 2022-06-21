import client from "../providers/client";

export const getAllJewels = (params) => client.get("/jowels");

export const postJewel = (formData) =>
  client.post("/jowels", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const delJewels = (id, imgUrl) =>
  client.delete(`/jowels/${id}?img=${imgUrl}`);
