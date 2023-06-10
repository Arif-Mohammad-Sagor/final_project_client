import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClassesLoader = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data, refetch, isError, isLoading } = useQuery({

    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClasses?email=${user?.email}`);
      return res.data;
    },
  });

  return [data, refetch, isError, isLoading];
};

export default useClassesLoader;
