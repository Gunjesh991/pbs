import { useAdminPhotographers } from "./useAdminPhotographers";

export const usePhotographers = () => {
  const {
    loading,
    photographers,
    getPhotographerList,
    getPhotographerProfile,
  } = useAdminPhotographers();

  return {
    loading,
    photographers,
    getPhotographerList,
    getPhotographerProfile,
  };
};
