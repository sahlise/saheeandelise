import { GiDiamondRing } from "react-icons/gi"
import StatBlock from "../components/Schedule/StatBlock"
import { PiForkKnifeFill } from "react-icons/pi"
import { FaCocktail } from "react-icons/fa"
import { IoMusicalNoteSharp, IoMusicalNotes } from "react-icons/io5"
import { IoMdPizza } from "react-icons/io"
import WeatherWidget from "../components/Schedule/Weather"
import CountdownTimer from "../components/Countdown"
import MapWidget from "../components/Schedule/MapIframe"

<div className="hidden md:grid md:grid-cols-5 md:gap-1 w-full">
{/* Timeline */}
<div className="md:col-span-2">
  <StatBlock label={'Ceremony'} icon={<GiDiamondRing className="w-full h-full" />} time={'3:30pm'}></StatBlock>
  <StatBlock label={'Cocktail Hour'} icon={<FaCocktail className="w-full h-full" />} time={'4:00pm'}></StatBlock>
  <StatBlock label={'Reception'} icon={<PiForkKnifeFill className="w-full h-full" />} time={'5:30pm'}></StatBlock>
  <StatBlock label={'First Dance'} icon={<IoMusicalNotes className="w-full h-full" />} time={'8:00pm'}></StatBlock>
  <StatBlock label={'Late Night Snack'} icon={<IoMdPizza className="w-full h-full" />} time={'10:00pm'}></StatBlock>
  <StatBlock label={'Last Dance'} icon={<IoMusicalNoteSharp className="w-full h-full" />} time={'11:30pm'}></StatBlock>
</div>

{/* Widgets */}
<div className="md:col-span-3 bg-weddingGreen">
  <div className="md:grid md:grid-cols-2 md:grid-rows-4 md:gap-1 w-full h-full">
    <div>
      <WeatherWidget></WeatherWidget>
    </div>
    <div>
      <CountdownTimer
        targetDate={'2024-06-08T15:30:00'}
        onInitialized={function (): void {
          console.log("Implement spinner")
        }
        }
      ></CountdownTimer>
    </div>
    <div className="md:col-span-2 md:row-span-2">
      <MapWidget></MapWidget>
    </div>
  </div>
</div>

</div>