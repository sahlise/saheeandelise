// components/CircleButton.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  number: number;
}

const clipPaths = [
  'polygon(24% 0, 1% 1%, 3% 21%, 0 36%, 4% 52%, 0 66%, 0 90%, 5% 100%, 26% 100%, 60% 99%, 81% 95%, 91% 92%, 100% 93%, 100% 68%, 100% 42%, 100% 0, 75% 0, 50% 3%)',
  'polygon(100% 0, 100% 53%, 97% 65%, 100% 100%, 39% 100%, 23% 98%, 0 100%, 2% 30%, 0 6%, 29% 0)'
]

function getDegree(): string {
  const d = Math.round(Math.random() * 3) + 2;
  const finalD = d * (Math.round(Math.random()) == 1 ? 1 : -1)
  return `${finalD.toFixed(0)}deg`;
}

const CircleButton: React.FC<ButtonProps> = ({ label, number }) => {
  return (
    <div className="w-1/2 md:w-3/4">
      <div
        className="bg-center my-4 w-full bg-[url('https://as2.ftcdn.net/v2/jpg/00/67/89/29/1000_F_67892955_kbvL7bB4vtteVhyPsgPhDqEMkRXxizRI.jpg')] h-60 w-1/6 bg-blue-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:bg-blue-700 hover:scale-105 clip-polygon pt-2 pb-8"
        style={{
            transform: `rotate(${getDegree()})`, 
            clipPath: clipPaths[number],
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default CircleButton;
