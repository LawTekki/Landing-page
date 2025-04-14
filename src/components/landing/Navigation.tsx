export const Navigation = () => {
  return (
    <div className="absolute flex items-center gap-[104px] right-[57px] top-[38px] max-md:right-[10%] max-sm:justify-end max-sm:right-5">
      <nav className="flex items-center gap-8 max-sm:hidden">
        <a
          href="#"
          className="text-white text-base font-medium leading-6 tracking-[-0.32px] cursor-pointer"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white text-base font-medium leading-6 tracking-[-0.32px] cursor-pointer"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white text-base font-medium leading-6 tracking-[-0.32px] cursor-pointer"
        >
          Contact us
        </a>
        <a
          href="#marketplace"
          className="text-white text-base font-medium leading-6 tracking-[-0.32px] cursor-pointer"
        >
          Our marketplace
        </a>
      </nav>
      <div className="flex items-center gap-2.5 rounded text-[#6B047C] text-xs font-medium leading-[15.6px] tracking-[-0.24px] cursor-pointer bg-white p-2.5">
        <span>Get started</span>
        <i className="ti ti-arrow-right text-base" />
      </div>
    </div>
  );
};
