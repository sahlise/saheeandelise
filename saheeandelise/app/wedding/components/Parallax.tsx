import Link from "next/link";
import useDevice from '../hook/useDevice';
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const MainParallax = () => {
  const { isMobile } = useDevice();

  return (
    <ParallaxBanner
      className="aspect-[1/1] md:aspect-[2/1]">
      <ParallaxBannerLayer
        speed={isMobile ? -2 : -10}
        scale={isMobile ? [1, 1.1] : [1, 1]}
        className=""
      >
        <img src="/images/woods-0.png" className="" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={isMobile ? 0 : -3}
        scale={isMobile ? [1, 1.15] : [1, 1]}
        className=""
      >
        <img src="/images/woods-1.png" className="" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={isMobile ? 0 : -3}
        scale={isMobile ? [1, 1.15] : [1, 1]}
        className=""
      >
        <img src="/images/woods-2.png" className="" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={isMobile ? 0 : 0}
        scale={isMobile ? [1, 1.3] : [1, 1]}
        className=""
      >
        <img src="/images/woods-3.png" className="" />
      </ParallaxBannerLayer>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-5 md:text-xl bg-white/[.6] m-4 md:m-0 md:w-1/2 rounded-lg text-center">
          <p className="text-xl md:text-4xl">Greetings traveler to the world of our wedding website!</p>
          We&apos;ve crafted this realm as a gateway into our story. If you encounter any difficulties while exploring our site, reach out to us using the Contact Us page.
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default MainParallax;