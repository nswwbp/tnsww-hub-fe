import { INavLinksInterface } from "@/@types/layout";
import { LogoInstance } from "./elements/misc";
import { LinkInstance } from "./elements/links";

export default function FooterInstance({
  navLinks,
  socialLinks,
}: INavLinksInterface) {
  return (
    <footer className="px-[var(--body-global-padding)] bg-[var(--trademark-color-mauve-2)] w-full px-10 py-4 gap-y-6 h-max col-all-start">
      <div className="w-full row-content-between">
        <span className="w-1/2">
          <LogoInstance type={"footer"} />
        </span>
        <span className="w-1/2">
          <span className="text-white">
            &copy;The Name School World-Wide &trade;
          </span>
        </span>
      </div>
      <section className="w-full h-max md:row-content-between sm:col-all-start">
        <div className="w-[50%] h-max">
          <nav className="md:grid-2-cols justify-center items-center w-full h-max gap-x-2">
            {navLinks?.map((_link: any, _idx: number) => (
              <LinkInstance
                key={_idx}
                customClass={"text-white"}
                target={_link.target}
                showLabel={true}
                label={_link.label}
                route={_link.route}
                showIcon={_link.showIcon}
                iconColor={"var(--white)"}
                iconPosition="right"
              />
            ))}
          </nav>
        </div>
        <div className="w-[50%] h-max">
          <nav className="md:grid-2-cols justify-center items-center w-full h-max gap-x-2">
            {socialLinks?.map((_link: any, _idx: number) => (
              <LinkInstance
                key={_idx}
                customClass={"text-white"}
                target={_link.target}
                showLabel={true}
                label={_link.label}
                route={_link.route}
                showIcon={true}
                iconColor={"var(--white)"}
                iconPosition="left"
                Icon={_link.icon}
              />
            ))}
          </nav>
        </div>
      </section>
    </footer>
  );
}
