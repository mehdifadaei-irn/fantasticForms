import { useMutation } from "@tanstack/react-query";
import { PostDataToCalc } from "../api/calculateData";
import { PostDataToTable } from "../api/createTable";

import { toast } from "sonner";

export const useCalculateDatas = () => {
  return useMutation(PostDataToCalc, {
    onSuccess: () => {
      toast.success("Done!");
    },
    onError: () => {
      toast.error("An Error happed");
    },
  });
};

export const useCalculateTables = () => {
  return useMutation(PostDataToTable, {
    onSuccess: () => {
      toast.success("Your Table Is Ready");
    },
    onError: () => {
      toast.error("An Error happed");
    },
  });
};
