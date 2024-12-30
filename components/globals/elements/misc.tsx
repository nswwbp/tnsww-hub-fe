import Image from "next/image";

export const LogoInstance = ({ type }: any) => {
  return (
    <Image
      src={
        "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
      }
      alt="TNSWW Logo"
      width={200}
      height={48}
      className={
        type === "header"
          ? "header-logo"
          : type === "footer"
          ? "footer-logo"
          : "general-logo"
      }
    />
  );
};

export const FooterLogoTrademarked = () => {
  return (
    <div className="w-full footer-top-section row-all-centered">
      <LogoInstance type={"footer"} />
      <sup className="text-white">&trade; &reg;</sup>
    </div>
  );
};

export const Divider = ({ type }: any) => {
  return (
    <>
      {type == "hr" ? (
        <div className="w-full h-2 bg-gray-200 opacity-10"></div>
      ) : (
        <div className="h-full w-2 bg-gray-200 opacity-10"></div>
      )}
    </>
  );
};
