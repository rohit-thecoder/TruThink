
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


const CtaButton = () => {
   

  return (
    <Link href="/contact">
      <button className="relative group z-2 bg-[#ff7a00] hover:bg-[#e56700] text-white font-semibold uppercase px-8 py-3 rounded-lg  transition-all duration-300 flex items-center justify-center overflow-hidden">
        <span className="translate-x-[-10px] md:translate-x-[-0px] transition-all duration-300  group-hover:translate-x-[-8px]">
          REQUEST FOR PROPOSAL
        </span>
        <FaArrowRightLong className="absolute opacity-100 md:opacity-0 translate-x-[100px] md:translate-x-[0px] group-hover:opacity-100 group-hover:translate-x-[100px] transition-all duration-300" />
      </button>
    </Link>
  );
};

export default CtaButton;
