import { apiRequest } from "../Api";
import { Photo } from "./photos";

export const getPhotos = async (_limit: number) => {
  return apiRequest<{}, Photo[]>({
    url: "photos",
    method: "GET",
    params: { _limit },
  }).then((res) => res.data);
};
