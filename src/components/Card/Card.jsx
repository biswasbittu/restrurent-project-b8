import React, { useEffect, useState } from 'react';
import SingleCards from '../singleCard/SingleCards';

const Card = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const loadData=async()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        const data= await res.json();
        setData(data.meals);
        };
        loadData();
    },[])
    return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data.map((singleData) => {
            //    console.log(singleData);
            return (
              <SingleCards singleData={singleData} key={singleData.idMeal} />
            );
          })}
        </div>
      </>
    );
};

export default Card;