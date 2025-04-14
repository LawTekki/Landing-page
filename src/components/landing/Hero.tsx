import { CTAButton } from "./CTAButton";
import { FloatingImages } from "./FloatingImages";
import { Navigation } from "./Navigation";

export const Hero = () => {
  return (
    <div className="relative min-h-[770px] w-full overflow-hidden bg-[#6B047C]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e337a0c989a58b1d7e4e3b6216b56a16e88565f"
        className="absolute w-[155px] h-[47px] left-[59px] top-[33px]"
        alt="LawTrolley Logo"
      />

      <Navigation />
      <FloatingImages />

      <div className="rounded text-white text-sm leading-[18.2px] tracking-[-0.28px] absolute p-1 left-14 top-[249px] max-sm:left-5 max-sm:top-[100px]">
        #1 Multivendor Marketplace for everything law related
      </div>

      <div className="absolute w-[576px] left-14 top-[289px] max-md:w-4/5 max-md:left-[10%] max-sm:w-[90%] max-sm:left-5 max-sm:top-[140px]">
        <div className="mb-6">
          <h1 className="text-white text-[64px] leading-[83.2px] tracking-[-1.28px] mb-4 max-sm:text-4xl">
            Your legal needs,
            <br />
            all in one trolley
          </h1>
          <p className="text-white text-base font-medium leading-6 tracking-[-0.32px]">
            A multi-vendor legal marketplace for AI-matched legal vendors, legal
            templates, legal tech, legal events, legal courses, legal quizzes
            and more...
          </p>
        </div>

        <div className="flex gap-4 max-sm:flex-col">
          <CTAButton variant="outline">Explore Marketplace</CTAButton>
          <CTAButton variant="solid">Become a Vendor</CTAButton>
          <CTAButton variant="dark">Meet Tina the Trolley</CTAButton>
        </div>
      </div>

      <div className="absolute text-white text-base font-medium leading-6 tracking-[-0.32px] left-14 bottom-[101px] max-sm:left-5 max-sm:bottom-10">
        Launching August 2025
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a367f097e36046a3bd34c12140b781005482ef59"
        className="absolute w-[608px] h-[609px] right-[257px] top-[94px] max-md:w-6/12 max-md:h-auto max-md:right-[10%] max-sm:opacity-30 max-sm:w-full max-sm:right-0"
        alt="Shopping Trolley"
      />
    </div>
  );
};
