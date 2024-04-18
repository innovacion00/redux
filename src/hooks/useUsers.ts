import { useAppSelector } from "./useStore";

export const useUsers = () => {
  const users = useAppSelector((state) => state.users);
  return {
    users,
  };
};
