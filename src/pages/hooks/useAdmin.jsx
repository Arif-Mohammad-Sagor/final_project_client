import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: adminRole, isLoading: isAdminLoading } = useQuery({
    queryKey: ["adminRole", user?.email],
    enabled: !loading && !!user?.email,

    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(
          `/myAllUsers/admin?email=${user?.email}`
        );
        return res.data;
      }
    },
  });
  console.log(adminRole);
  return [adminRole, isAdminLoading];
};
export default useAdmin;
