import axios from "axios";
import { useSnack } from "../provider/SnackbarProvider";
const useAxiosinterceptors = () => {
  const snack = useSnack();
  //   axios.interceptors.request.use(
  //     (requestObj) => {
  //       //   console.log(requestObj);
  //       //   requestObj.user = "amro";
  //       //   if (!requestObj.user) throw new Error("errorrr!!!!");
  //       return Promise.resolve(requestObj);
  //     },
  //     (err) => {
  //       console.log(err);
  //       return Promise.reject(err);
  //     }
  //   );
  axios.interceptors.request.use((data) => Promise.resolve(data), null);
  axios.interceptors.response.use(null, (error) => {
    const expectedError = error.response && error.response.status >= 400;
    if (expectedError) snack("error", error.message);
    return Promise.reject(error);
  });
};
export default useAxiosinterceptors;
