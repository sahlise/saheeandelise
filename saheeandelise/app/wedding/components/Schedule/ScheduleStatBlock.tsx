import Image from 'next/image';

interface StatBlockProps {
  label: string;
  icon: any;
  time: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ label, icon, time }) => {


  return (
    <div>
      <div className="grid grid-cols-3">
        {/* <div className="cut-corners">
          <p>{icon}</p>
          <p>{label}</p>
        </div> */}
        <div className="col-span-2">
          <div className="relative w-full h-full">
            <img src="/images/hexBanner.png" alt="Hexagon" style={{ width: 'auto', height: '100%' }} />
            <div className="absolute" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '20%', height: '15%' }}>
              {/* Adjust the size of the icon relative to the SVG here. Height is reduced, and top is adjusted to move it higher. */}
              <div className="w-full h-full bg-red-500">{icon}</div>
            </div>
          </div>
        </div>
        <div className="border border-black">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default StatBlock;
