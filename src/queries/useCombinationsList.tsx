import { useQuery } from '@tanstack/react-query'
import { natusVincereApi } from '../utils/api';

export const useCombinationsList = (
) => {
  return useQuery(
    ['combinations'],
    getCombinationsList(),
    {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  );
};

const getCombinationsList = () => {
  return async () => {
    return await natusVincereApi.get('/combinations');
  };
};
