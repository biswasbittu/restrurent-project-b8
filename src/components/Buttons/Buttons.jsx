import React from 'react';

const Buttons = ({children}) => {
    return (
      <div className="text-center my-4">
        <button className="btn btn-info text-white font-semibold">{children}</button>
      </div>
    );
};

export default Buttons;