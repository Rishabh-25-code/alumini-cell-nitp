
import Card from './Card'
import React, { useState } from 'react';
import axios from 'axios';

const [data, setData] = useState([])

const UGDatabase = () => {

    const url = "https://alumini-cell-nitp-two.vercel.app/members";
    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        const res = await axios.get(url);
        console.log(data);
        return setData(res.data);
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    
  return (<>
  
    <div className='pt-16'>
    <h1 data-aos="fade-right" className='font-extrabold text-transparent lg:text-8xl md:text-7xl text-6xl bg-clip-text bg-gradient-to-r from-blue-400  to-sky-600 m-10 large-heading '>UG-Database</h1>

    <div className='my-20 mx-5 flex flex-wrap gap-10 items-center justify-center' id='Team_main'>
    <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
      </div>

    </div>

    </>
  )
}

export default UGDatabase