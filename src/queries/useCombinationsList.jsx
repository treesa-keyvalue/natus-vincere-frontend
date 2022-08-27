import { useQuery } from "@tanstack/react-query";
import { natusVincereApi } from "../utils/api";

export const useCombinationsList = (data) => {
  return useQuery(["combinations"], getCombinationsList(data), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
};

const getCombinationsList = (data) => {
  return async () => {
    const res = await natusVincereApi.get(
      `/combinations?color=${data.color}&gender=${data.gender}&type=${data.type}`
    );
    return res;
  };
};
