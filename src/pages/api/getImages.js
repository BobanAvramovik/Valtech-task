import { baseUrl } from "../../config/baseUrl";

export const getImages = () => {
  return fetch(`${baseUrl}/v2/list`);
};
