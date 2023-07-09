import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;http://localhost:5000/address?postcode=NW4 1SU
const apiUrl = "http://localhost:5000/";
const endpoint = `address`;

// export async function getAddressByPostCode(id: string) {
//   const { data } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );
//   return data;
// }
export async function getAddressByPostCode(postCode: string) {
  const { data } = await axios.get(
    `http://localhost:5000/address?postcode=${postCode}`
  );
  return data;
}
