import axios from "axios";

const supplymentApi = {
  getAll: async () => {
    const response = await axios.get(
      (process.env.NEXT_PUBLIC_API_URL as string) + "/supplyment/get"
    );
    return response.data;
  },
  update: (email: string, password: string) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "/user/signin",
      {
        email,
        password,
      }
    );
  },

  create: (data:any) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "/supplyment/create",
      data
    );
  },

  delete: (email: string, password: string) => {
    return axios.post(
      (process.env.NEXT_PUBLIC_API_URL as string) + "/user/signin",
      {
        email,
        password,
      }
    );
  },
};

export { supplymentApi };
