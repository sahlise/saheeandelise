import Link from "next/link";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const MainParallax = () => {
  return (
    <ParallaxBanner
      className="aspect-[2/1] md:aspect-[2/1]">
      <ParallaxBannerLayer
        speed={-10}
        className="bg-top"
      >
        <img src="/images/woods-0.png" className="object-top" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={-3}
        className="bg-top"
      >
        <img src="/images/woods-1.png" className="object-top" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={-3}
        className="bg-top"
      >
        <img src="/images/woods-2.png" className="object-top" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={10}
        className="bg-top"
      >
        <img src="/images/woods-3.png" className="object-top" />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer
        speed={10}
        className="bg-top"
      >
        <img src="/images/woods-3.png" className="object-top" />
      </ParallaxBannerLayer>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-5 md:text-xl bg-white/[.6] m-4 md:m-0 md:w-1/2 rounded-lg text-center">
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