import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Yoshi.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/GNC.png";
import chatify from "../../Assets/LIDAR.png";
import suicide from "../../Assets/Guitar.jpg";
import bitsOfCode from "../../Assets/CUDA.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">My Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SoC Hardware Accelerator"
              description="A custom hardware accelerator for image processing and vision-based deep learning LIDAR on a Zynq Z7-7000 SoC.
               This includes a custom-written embedded Linux kernel based on Yocto 
               written in C and separate data-paths written in Verilog for image processing. With the custom operating system, 
               I received 300x speedupp over an ARM Cortex A9 and power consumption under 1W."
              ghLink="https://github.com/KChugh2903/soc-hw-accelerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="GPU Rocket Dynamics Simulator"
              description="Uinsg CUDA, this is a supersonic rocket dynamics trajectory simulator with parallel processing.
               It runs Monte Carlo simulations with OpenMPI, CUDA, and Pytorch. Data is visualized using OpenGL, including OpenMPI 
               for environmental processing. It includes support for thrust-vector control rockets. "
              ghLink="https://github.com/KChugh2903/gpu-simulator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GNC Flight Computer"
              description="The GNC Flight Computer is a PCB that manages telemetry, sensor fusion, data logging,
               controls, attitude, and state estimation for a thrust vector control rocket. It includes sensors in 
               SPI, UART, Ethernet, SPI, QuadSPI, and I2C. The software architecture includes a real-time operating system with DMA, improving memory usage. On the control side, it runs a PID loop for actuation, an EKF for state estimation, and an LQR for controls. "
              ghLink="https://github.com/KChugh2903/jet-vanes-flight-software"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Yoshi's Ghosts"
              description="This is a full NES game programmed with Verilog on the Basys3 FPGA Board. 
              It includes an NES Controller peripheral for game controls, Python scripts for automated ROM generation, and 16 verilog scripts including 2D kinematics, sprite displays and animations and score tracking. 
"
              ghLink="https://github.com/KChugh2903/YoshiGhosts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="DSP Guitar FPGA Board"
              description="This board is an individual project which simulates DSP guitar effects with an FPGA. This performs digital signal processing on DSP
cores and analog components to simulate distortion, overdrive, gain, delay, chorus, tremolo, and equalizers. It performed 99% similarly to a standard amplifier and pedals with half the cost"
              ghLink="https://github.com/KChugh2903/dsp-guitar-board-fpga"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
