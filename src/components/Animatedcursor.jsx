import React from "react";
import AnimatedCursor from "react-animated-cursor";
function Animatedcursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={12}
      color="120, 69, 192"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        "p",
        ".link",
      ]}
    />
  );
}

export default Animatedcursor;
