// components/CircleButton.tsx
import React from 'react';

interface LongClipPathProps {
  label: string;
}

const clipPaths = [
  'polygon(24% 0, 1% 1%, 3% 21%, 0 36%, 4% 52%, 0 66%, 0 90%, 5% 100%, 26% 100%, 60% 99%, 81% 95%, 91% 92%, 100% 93%, 100% 68%, 100% 42%, 100% 0, 75% 0, 50% 3%)',
  'polygon(100% 0, 100% 53%, 97% 65%, 100% 100%, 39% 100%, 23% 98%, 0 100%, 2% 30%, 0 6%, 29% 0)'
]





const LongClipPath: React.FC<LongClipPathProps> = ({ label }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`bg-contain w-3/4 almendra-regular-italic flex flex-col justify-center items-center my-4 bg-[url('/images/woodtest1.png')] h-full text-black font-bold py-2 px-4 transform transition`}
        style={{
          clipPath: 'polygon(10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)'
        }}
      >
        <div className="text-6xl text-center py-6">
          {label}
        </div>
      </div>
    </div>
  );
};

export default LongClipPath;
