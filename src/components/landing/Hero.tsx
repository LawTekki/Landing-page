import { CTAButton } from "./CTAButton";
import { FloatingImages } from "./FloatingImages";
import { Navigation } from "./Navigation";

// Add keyframes for the float animation
const floatKeyframes = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
`;
<img src="/public/image 2.png" alt="" />
// Add the keyframes to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = floatKeyframes;
  document.head.appendChild(style);
}

export const Hero = () => {
  return (
    <div className="relative min-h-[770px] w-full overflow-hidden bg-[#6B047C]">
      <Navigation />
      <FloatingImages />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 pt-[100px] lg:pt-[200px]">
          <div className="rounded text-white text-sm leading-[18.2px] tracking-[-0.28px] mb-8">
            #1 Multivendor Marketplace for everything law related
          </div>

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

          <div className="flex gap-4 max-sm:flex-col mb-8">
            <CTAButton variant="outline">Explore Marketplace</CTAButton>
            <CTAButton variant="solid">Become a Vendor</CTAButton>
            <CTAButton variant="dark">Meet Tina the Trolley</CTAButton>
          </div>

          <div className="text-white text-base font-medium leading-6 tracking-[-0.32px]">
            Launching August 2025
          </div>
        </div>

        {/* Trolley Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a367f097e36046a3bd34c12140b781005482ef59"
            className="w-[60%] md:w-[50%] lg:w-[608px] h-auto animate-float max-w-full
                     lg:absolute lg:right-[10%] lg:top-[94px]
                     transition-all duration-300 ease-in-out"
            alt="LawTrolley Shopping Cart - Your one-stop solution for legal services"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          />
        </div>
      </div>
    </div>
  );
};
