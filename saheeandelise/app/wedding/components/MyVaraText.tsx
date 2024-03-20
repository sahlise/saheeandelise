import { useEffect } from "react";
import Vara from "vara";

interface VaraTextProps {
  text: string;
}

export function VaraText({ text }: VaraTextProps) {
  useEffect(() => {
    const varaContainer = document.querySelector("#vara-container");

    // Clear the container to prevent duplicate animations
    if (varaContainer) {
      varaContainer.innerHTML = '';
    }
    const pacifico = "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json";
    const satsify = "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json";
    const parisienne = "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json";
    const shadows = "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json";
    const vara = new Vara(
      "#vara-container",
      satsify,
      [
        {
          text: text,
          fontSize: 72,
          strokeWidth: 2, // Width / Thickness of the stroke
	        color: "white", // Color of the text
	        duration: 2200,
          delay: 500,
          textAlign:"center"
        },
      ]
    );

    // Cleanup function to potentially handle component unmount or reinitialization cases
    return () => {
      // Perform any cleanup if necessary, such as removing event listeners added by Vara
    };
  }, [text]); // Include `text` in the dependency array to re-run the effect if `text` changes

  return <div id="vara-container" className="z-[20] h-full w-full flex justify-center items-center"></div>;
}
