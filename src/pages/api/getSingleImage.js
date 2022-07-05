import { baseUrl } from "../../config/baseUrl";

export const getSingleImage = (idImage) => {
  return fetch(`${baseUrl}/id/${idImage}/info`);
};
