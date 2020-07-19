import React, {useState, useEffect} from 'react';
import getArr from './getArr';


const Layout = () => {

  const [data, setData] = useState([]);

  async function fetchData() {
    setData(await getArr());
  }

  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <>
      {data.map(v => {
        return <div>{v}</div>
      })}
    </>
  )
}

export default Layout;