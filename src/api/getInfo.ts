import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const endpoint = "info";

// http://192.168.20.114:5000/info?postcode=90&address=asdasd


export async function getInfo(postCode: string, address: string) {
  console.log(postCode, address)
  const { data } = await axios.get(`${apiUrl}/${endpoint}`, {
    params: {
      postcode: postCode,
      address: address,
    },
  });
  console.log(data, "daaaaa")
  return data;
}
