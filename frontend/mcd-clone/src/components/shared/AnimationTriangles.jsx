import React from 'react'

export const AnimationTriangles = () => {

  const shapes = [
    { top: '10%', left: '30%', size: 15, delay: '11s', bgColor:"yellow" },
    { top: '2%', left: '1%', size: 40, delay: '7s', bgColor: "red" },
    { top: '5%', left: '90%', size: 15, delay: '8s', bgColor: "yellow" },
    { top: '50%', left: '90%', size: 35, delay: '8s', bgColor: "yellow" },
    { top: '55%', left: '60%', size: 15, delay: '6s', bgColor: "yellow" },
    { top: '65%', left: '40%', size: 10, delay: '4s', bgColor: "yellow" },
    { top: '50%', left: '55%', size: 10, delay: '4s', bgColor: "red" },
    { top: '60%', left: '40%', size: 10, delay: '4s', bgColor: "red" },
  ];

  return (
    <div className="absolute w-full h-screen">
      {shapes.map((shape, index) => (
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
      ))}
    </div>
  );
}
