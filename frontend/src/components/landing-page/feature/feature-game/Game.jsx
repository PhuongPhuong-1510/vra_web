import React from 'react';
import './Game.css';
import section1Img from '../../../../imgs/feature-game/section1.svg';
import section2Img from '../../../../imgs/feature-game/section2.svg';
import section3Img from '../../../../imgs/feature-game/section3.svg';

const Game = () => {
  return (
    <div className="game">
      <div className="section1">
        <img src={section1Img} alt="section1" />
        <div className="section1-content">
          <h1>VRA</h1>
          <p>Chào mừng bạn đến với một thế giới nơi cảm xúc của bạn quan trọng</p>
        </div>
      </div>

      <div className="section2">
        <img src={section2Img} alt="section2" />
      </div>

      <div className="section3">
        <img src={section3Img} alt="section3" />
        <p>Trở thành người đồng hành cùng con</p>
      </div>
    </div>
  );
};

export default Game;
