interface FloatingImagesProps {
  className?: string;
}

export const FloatingImages = ({ className }: FloatingImagesProps) => {
  return (
    <>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f51e0f56b1cc9091bbe84f3f168f5bc45c12e420"
        className="absolute w-[225px] h-[225px] right-[200px] top-[38px] max-md:hidden"
        alt="Floating Image 1"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/24223a61e08d4ed06cd731a2841f039cc89e0cf1"
        className="absolute w-[189px] h-[127px] right-[111px] top-[203px] max-md:hidden"
        alt="Floating Image 2"
      />
    </>
  );
};
