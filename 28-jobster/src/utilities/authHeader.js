import { getUserFromLocalStorage } from "./index";

export const authHeader = () => {
  return {
    headers: {
      authorization: `Bearer ${getUserFromLocalStorage().token}`,
    },
  };
};
