import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Engineer",
          "Embedded Software Developer",
          "Robotics Engineer",
          "Software Engineer",
          "ASIC Designer",
          "Controls and Simulations Engineer",
          "Hardware Engineer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
