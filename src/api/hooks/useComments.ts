import { useQuery } from "react-query";
import { Comment } from "../commnets/comments";
import { getComments } from "../commnets/comments.client";

export const useComments = () => {
  return useQuery<Comment[]>("comments", () => getComments(10));
};
