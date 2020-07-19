import axios from 'axios';

const getArr = async () => {
  let res = await axios.get('http://localhost:3065/data');
  console.log(res)
  console.log(typeof res.data);
  return res.data;
}


export default getArr