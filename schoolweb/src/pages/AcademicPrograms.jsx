import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const equations = [
  'E=mc²', 'πr²', 'a²+b²=c²', 'sin(θ)', '∫f(x)dx', 'Δy/Δx', 'λ', 'μ', 'Σ', 'θ', 'log(x)', 'x²+y²=z²', 'f(x)=y'
];

const Equation = ({ text, position, speed }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.position.y -= speed;
    if (ref.current.position.y < -5) {
      ref.current.position.y = Math.random() * 5 + 5;
      ref.current.position.x = Math.random() * 10 - 5;
      ref.current.position.z = Math.random() * 10 - 5;
    }
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.5}
      color="white"
      font="/fonts/helvetiker_regular.typeface.json" // Ensure you have this font
    >
      {text}
    </Text>
  );
};

const MathRain = () => {
  const [equationsList, setEquationsList] = useState([]);

  useEffect(() => {
    const equationsArray = [];
    for (let i = 0; i < 100; i++) {
      const text = equations[Math.floor(Math.random() * equations.length)];
      const speed = Math.random() * 0.02 + 0.05;
      const position = [Math.random() * 10 - 5, Math.random() * 5 + 5, Math.random() * 10 - 5];
      equationsArray.push({ text, speed, position });
    }
    setEquationsList(equationsArray);
  }, []);

  return (
    <>
      {equationsList.map((equation, index) => (
        <Equation
          key={index}
          text={equation.text}
          position={equation.position}
          speed={equation.speed}
        />
      ))}
    </>
  );
};

const AcademicPrograms = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-900 to-purple-900 text-center">
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <MathRain />
        </Canvas>
      </div>

      {/* ... rest of your AcademicPrograms component */}
    </section>
  );
};

export default AcademicPrograms;