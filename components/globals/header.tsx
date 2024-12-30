import { INavLinksInterface } from "@/@types/layout";
import { ButtonInstance } from "./elements/buttons";
import { commonIcons } from "./elements/icons";
import { LinkInstance } from "./elements/links";
import { LogoInstance } from "./elements/misc";

export default function HeaderInstance({ navLinks }: INavLinksInterface) {
  return (
    <header className="w-full h-[10vh] px-[var(--body-global-padding)] py-6 flex flex justify-between items-center shadow-md">
      <span className="flex justify-start items-center md:w-[10%] sm:w-[50%]">
        <LogoInstance type={"header"} />
      </span>
      <nav className="lg:flex flex justify-center items-center w-[80%] h-full gap-x-2 xs:!hidden ">
        {navLinks?.map((_link: any, _idx: number) => (
          <LinkInstance
            customClass={""}
            target={_link.target}
            showLabel={true}
            label={_link.label}
            route={_link.route}
            showIcon={_link.showIcon}
            iconColor={"var(--black)"}
            iconPosition="right"
          />
        ))}
      </nav>
      <div className="flex justify-center items-center md:w-[10%] sm:w-[50%]">
        <ButtonInstance
          onClick={() => console.log("--")}
          showIcon={true}
          Icon={commonIcons.user}
          iconColor={"white"}
          iconSize={22}
          iconPosition={"right"}
          label={"Account"}
          title={"One account for Name School related activities"}
          buttonColor={"mauve-b"}
        />
      </div>
    </header>
  );
}
