import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

const MainParallax = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: '/images/forest-branches.png', speed: -20 },
        // { image: '/images/vine.png', speed: -10 },
      ]}
      className="aspect-[1/1] md:aspect-[2/1]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-5 md:text-xl bg-white m-4 md:m-0 md:w-1/2 rounded-lg text-center">
          Welcome, dear traveler, to our humble wedding website.
          We&apos;ve crafted this site as a portal into our story, sprinkling it with delightful
          details and fun facts for you to discover and enjoy. Within these pages,
          you&apos;ll find everything you need to know about our special day—from the enchanting
          venue to the day&apos;s schedule, and more. If you have any troubles with our site, please
          don&apos;t hesitate to reach out to us using the Contact Us page provided.
          We&apos;re eagerly anticipating the joy of embarking on this journey with you.
        </div>
      </div>


      
    </ParallaxBanner>
  );
};

export default MainParallax;