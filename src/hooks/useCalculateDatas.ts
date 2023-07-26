import { useMutation } from "@tanstack/react-query";
import { PostDataToCalc } from "../api/calculateData";

export const useCalculateDatas = () => {
  return useMutation(PostDataToCalc);
};
