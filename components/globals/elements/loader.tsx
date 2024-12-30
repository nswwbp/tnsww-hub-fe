import { IAltButtonLoaderProps } from "@/@types/elements";
import Image from "next/image";

export const ButtonLoader = () => {
  return (
    <span className={`row-all-centered gap-x-2 w-max h-max button-loader`}>
      <Image
        width={100}
        height={100}
        className="w-6 h-6"
        src={"/animations/eclipse-white-loader.svg"}
        alt="loader"
      />
    </span>
  );
};

export const AltButtonLoader = ({ customClass }: IAltButtonLoaderProps) => {
  return (
    <span className={`row-all-centered gap-x-2 w-max h-max button-loader`}>
      <Image
        width={100}
        height={100}
        className={`w-10 h-10 ${customClass}`}
        src={"/animations/eclipse-blue-loader.svg"}
        alt="loader"
      />
    </span>
  );
};
