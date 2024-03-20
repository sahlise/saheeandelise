import Image from 'next/image';
import './StatBlock.css'

interface StatBlockProps {
  label: string;
  icon: any;
  time: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ label, icon, time }) => {


  return (
    <div>
      <div className="grid grid-cols-3 m-2">
        <div className="col-span-2">
          <div className="relative w-full h-full half-a-border-on-top">
            <img src="/images/hexBanner.png" alt="Hexagon" style={{ width: 'auto', height: '100%' }} />
            <div className="absolute" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '20%', height: '30%' }}>
              <div className="w-full h-full flex flex-col items-center">{icon}</div>
            </div>
            <div className="absolute" style={{ top: '72%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', height: '15%' }}>
              <div className="w-full h-full text-center text-lg font-bold">{label}</div>
            </div>
          </div>
        </div>
        <div className="border-r-2 border-y-2 border-black flex items-center jusify-center h-full align-middle">
          <p className="text-center align-middle text-2xl">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
