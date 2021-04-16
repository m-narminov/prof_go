import React from 'react';

const Game = () => (
  <div>
    <h1 className='page-title game-title'>В погоне за Эльбрус коинами</h1>
    <iframe
      title='В погоне за Эльбрус коинами'
      height='100%'
      width='100%'
      scrolling='no'
      style={{
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
        border: 'none',
      }}
      src='run/index.html'
    />
  </div>
);

export default Game;
