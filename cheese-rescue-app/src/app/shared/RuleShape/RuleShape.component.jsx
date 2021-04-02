import React from "react";
import Sketch from "react-p5";

const holderStyle = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  display: "flex",
};

const RuleShape = (props) => {
  let x = 0;
  let y = 0;
  let imagen;

  //   function preload(p5) {
  //     img = p5.loadImage("../../../assets/img/Mouse.jpeg");
  //   }

  //   const [sizeScreen, setSizeScreen] = React.useState();
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(p5.windowWidth - 17, p5.windowHeight - 17).parent(
      canvasParentRef
    );

    p5.loadImage("./image/ninja.jpg", (img) => {
        imagen = img;
    //   p5.redraw();
      p5.image(imagen, 50, 50);
    });

    // x = p5.random(p5.windowWidth - 17);
    // y = p5.random(p5.windowHeight - 17);
  };

  const draw = (p5) => {
    // p5.background(0);
    // p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    if(imagen) {
        p5.image(imagen, 50, 50);
    }
  };

  function mouseDragged(p5) {
    x = p5.mouseX;
    y = p5.mouseY;
  }

  return (
    // <div className="justify-content-center" style={holderStyle}>
      <Sketch setup={setup} draw={draw}  />
    // </div>
  );
};

export default RuleShape;

// const holderStyle = { width: "100vw", height: "100vh" };

// const pictureStyle = {
//   backgroundImage: `url(${ruleShape})`,
//   width: "200px",
//   height: "200px",
// };

// const { innerHeight, innerWidth } = window;
// const startingPosition = { x: innerWidth / 2 - 100, y: innerHeight / 2 - 100 };

//   const picturePosition = {
//     position: "absolute",
//     right: `${dragInfo.translation.x}px`,
//     bottom: `${dragInfo.translation.y}px`,
//   };
//   return (
//     <div style={holderStyle}>
//       <div
//         style={{
//           ...picturePosition,
//           ...pictureStyle,
//         }}
//
//       />
//     </div>
//   );
// };

// export default RuleShape;
