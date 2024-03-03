import React, { useState } from 'react';

const SingleCards = (props) => {
    console.log(props.singleData);
    const { strMealThumb, strMeal, strInstructions } = props.singleData;
    const [paragraphlength, setParagraphlength] = useState(false);

    const paragraph = strInstructions.slice(0, paragraphlength ? 500 : 100);
    const handlePragraph=()=>{
      setParagraphlength(true)
    }
    return (
      <div>
        <div className="card w-96 lg:w-full bg-base-100 shadow-xl">
          <div className="p-4 ">
            <figure className="rounded-lg">
              <img src={strMealThumb} alt="Shoes" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">
              {strMeal}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="leading-2">
              {" "}
              {paragraph}{" "}
              {!paragraphlength&&<span className="cursor-pointer " onClick={handlePragraph} >.......</span>}
            </p>

            {/* {strInstructions.slice(0,6)} */}
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleCards;