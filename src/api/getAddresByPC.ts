import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = `address`;

export async function getAddressByPostCode(postCode: string) {
  const { data } = await axios.get(`${apiUrl}/${endpoint}`, {
    params: {
      postcode: postCode,
    },
  });
  return data;
}
