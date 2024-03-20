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

function generateWord(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateRandomWords(): string {
  const limit = 20;
  let result = [];
  const x = Math.round(Math.random() * 3);
  const diff = x * (Math.round(Math.random()) == 1 ? 1 : -1)
  const realLimit = limit + diff;

  for ( let i = 0; i < realLimit; i++ ) {
    const wordLength = Math.round(Math.random() * 5) + 1;
    result.push(generateWord(wordLength));
  }

  return result.join(' ');
}

const PaperButton: React.FC<ButtonProps> = ({ label, number }) => {
  const [degree, setDegree] = React.useState('');
  const [text, setText] = React.useState('');
  
  React.useEffect(() => {
    setDegree(getDegree());
    setText(generateRandomWords())
}, []);

if (!degree || !text) {
    // Returns null on first render, so the client and server match
    return null;
}

  return (
    <div className="w-1/2 md:w-3/4">
      <div
        className="bg-center bg-contain	bg-repeat almendra-regular-italic flex flex-col justify-center items-center my-4 md:my-0 w-full bg-[url('/images/paper.png')] h-60 w-1/6 text-black font-bold px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:bg-blue-700 hover:scale-105 clip-polygon pt-2 pb-8"
        style={{
          transform: `rotate(${degree})`,
          clipPath: clipPaths[number],
        }}
      >
        <div className="text-2xl font-bold">
          {label}
        </div>
        <div className="daedra-regular">
          {text}
        </div>

      </div>
    </div>
  );
};

export default PaperButton;
