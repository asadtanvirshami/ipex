import axios from "axios";

const authApi = {
  login: (email: string, password: string) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "/user/signin",
      {
        email,
        password,
      }
    );
  },
};

export { authApi };
