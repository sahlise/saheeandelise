import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

const MainParallax = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/woods.png', speed: -20 },
        // { image: '/images/vine.png', speed: -10 },
      ]}
      className="aspect-[1/1] md:aspect-[2/1]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-5 md:text-xl bg-white m-4 md:m-0 md:w-1/2 rounded-lg text-center">
          Greetings, dear traveler, to the world of our wedding website.
          We&apos;ve crafted this realm as a gateway into our story, filled with delightful details
          and fun facts for you to discover and enjoy. Within these pages, you&apos;ll find
          everything you need to know about our special day—from the enchanting venue to the day&apos;s schedule, and more.
          If you encounter any difficulties while exploring our site, please don't hesitate to reach out to us using the Contact Us page.
          We eagerly await the pleasure of your company on this extraordinary journey.
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default MainParallax;