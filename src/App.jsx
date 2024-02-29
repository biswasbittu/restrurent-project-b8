import React from 'react';
import Headers from './components/Headers/Headers';
import Buttons from './components/Buttons/Buttons';
import Card from './components/Card/Card';


const App = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Headers />
        <Buttons>Short by </Buttons>
        <Card />
      </div>
    </>
  );
};

export default App;