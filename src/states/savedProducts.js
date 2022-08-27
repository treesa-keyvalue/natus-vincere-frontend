import { atom } from 'recoil';

export const SavedProducts = atom({
  key: "savedProducts",
  default: [],
});
