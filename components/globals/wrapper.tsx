import { commonIcons } from "./elements/icons";
import FooterInstance from "./footer";
import HeaderInstance from "./header";

export default function PageWrapper({ children }: any) {
  //site map link data
  const navLinks = [
    { label: "Home", route: "/", showIcon: false, target: "_self" },
    { label: "Blog", route: "/blog", showIcon: false, target: "_self" },
    { label: "Events", route: "/events", showIcon: false, target: "_self" },
    {
      label: "Baptism",
      route: "https://baptism.tnsww.com",
      showIcon: true,
      target: "_blank",
    },
    {
      label: "T.W.C",
      route: "https://twc.tnsww.com",
      showIcon: true,
      target: "_blank",
    },
    {
      label: "'Yout'",
      route: "https://yout.tnsww.com",
      showIcon: true,
      target: "_blank",
    },
    {
      label: "'Sceva'",
      route: "https://sceva.tnsww.com",
      showIcon: true,
      target: "_blank",
    },
  ];

  //site map link data
  const socialLinks = [
    {
      label: "Facebook",
      route: "/",
      target: "_self",
      icon: commonIcons.facebookIcon,
    },
    {
      label: "Instagram",
      route: "/blog",
      target: "_self",
      icon: commonIcons.instagramIcon,
    },

    {
      label: "X",
      route: "#",

      target: "_blank",
      icon: commonIcons.xIcon,
    },
    {
      label: "TikTok",
      route: "#",

      target: "_blank",
      icon: commonIcons.tiktokIcon,
    },
    {
      label: "Youtube",
      route: "#",

      target: "_blank",
      icon: commonIcons.ytIcon,
    },
  ];
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-start items-start gap-y-[1rem]">
      <HeaderInstance navLinks={navLinks} />
      <div className="w-full min-h-[80vh] px-[var(--body-global-padding)] h-max flex flex-col justify-start items-start bg-white">
        {children}
      </div>
      <FooterInstance navLinks={navLinks} socialLinks={socialLinks} />
    </div>
  );
}
