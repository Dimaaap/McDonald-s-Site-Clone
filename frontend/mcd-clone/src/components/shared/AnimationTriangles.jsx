import React from 'react'

export const AnimationTriangles = ({ firstPage=true }) => {

  const shapes = [
    { top: '10%', left: '30%', size: 15, delay: '11s', bgColor:"yellow" },
    { top: '2%', left: '1%', size: 40, delay: '7s', bgColor: "red" },
    { top: '5%', left: '90%', size: 15, delay: '8s', bgColor: "yellow" },
    { top: '50%', left: '90%', size: 35, delay: '8s', bgColor: "yellow" },
    { top: '55%', left: '60%', size: 15, delay: '6s', bgColor: "yellow" },
    { top: '65%', left: '40%', size: 10, delay: '4s', bgColor: "yellow" },
    { top: '50%', left: '55%', size: 10, delay: '8s', bgColor: "red" },
    { top: '60%', left: '40%', size: 10, delay: '2s', bgColor: "red" },
  ];

  const secondSlideShapes = [
    { top: "10%", left: "90%", size: 20, delay: "4s", bgColor: "yellow" },
    { top: "30%", left: "105%", size: 15, delay: "1s", bgColor: "blue" },
    { top: "40%", left: "75%", size: 25, delay: "3s", bgColor: "red" },
    { top: "60%", left: "55%", size: 15, delay: "2s", bgColor: "yellow" },
    { top: "70%", left: "105%", size: 15, delay: "4s", bgColor: "blue" },
    { top: "80%", left: "95%", size: 20, delay: "4s", bgColor: "red" },
    { top: "85%", left: "80%", size: 15, delay: "4s", bgColor: "blue" },
    { top: "90%", left: "70%", size: 15, delay: "4s", bgColor: "yellow" },
  ]

  return (
    <div className="absolute w-full h-screen z-0">
      {firstPage ? shapes.map((shape, index) => (
        <div
          key={index}
          className="custom-shape absolute animate-float z-0"
          style={{
            top: shape.top,
            left: shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: shape.delay,
            backgroundColor: shape.bgColor
          }}
        ></div>
      )) : secondSlideShapes.map((shape, index) => (
        <div key={index}
        className="custom-shape absolute animate-float z-0"
        style={{
          top: shape.top,
            left: shape.left,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: shape.delay,
            backgroundColor: shape.bgColor
        }} />
      ))}
    </div>
  );
}
