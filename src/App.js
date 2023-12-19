import React from "react";
import Chatbot from "react-simple-chatbot";
import steps from './data/steps.json';
import logo from './CMSlogo.png'
import './App.css'


// const theme = {
//   background: '#C9FF8F',
//   headerBgColor: '#197B22',
//   headerFontSize: '20px',
//   botBubbleColor: '#0F3789',
//   headerFontColor: 'white',
//   botFontColor: 'white',
//   userBubbleColor: '#FF5733',
//   userFontColor: 'black',
// };

const config = {
  floating: true,
};

const chatbotStyle = {
  width: '100%',
  height: '100vh ! important',
};

export default function Temp() {
  return (
    <div style={{ width: '100%', height: '100vh ! important' }}>
      <Chatbot
        steps={steps}
        style={chatbotStyle}
        botAvatar={logo}
        {...config}
      />
    </div>
  );
}