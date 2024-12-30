import {
  ActionButtonInstance,
  ButtonInstance,
} from "@/components/globals/elements/buttons";
import { commonIcons, IconInstance } from "@/components/globals/elements/icons";
import { Heading } from "@/components/globals/elements/typography";
import Image from "next/image";

export default function Ticketing() {
  return (
    <section className="w-[20%] py-4 px-2 col-all-start gap-y-4 h-[80vh] sm:xs:w-full shadow-lg rounded-l-md overflow-y-auto">
      <div className="w-[100%] row-content-between">
        <ActionButtonInstance
          onClick={() => console.log("-->e")}
          title={"Close"}
          Icon={commonIcons.closeicon}
          iconColor="var(--black)"
          iconSize={18}
          showIcon={true}
          loading={false}
          disabled={false}
          customClass="bg-transparent w-max"
        />
        <span className="w-max row-content-end">
          <ActionButtonInstance
            onClick={() => console.log("--->r")}
            title={"Close"}
            Icon={commonIcons.wishlistIcon}
            iconColor="var(--black)"
            iconSize={18}
            showIcon={true}
            loading={false}
            disabled={false}
            customClass="bg-transparent w-max"
          />
          <ActionButtonInstance
            onClick={() => console.log("--->d")}
            title={"Close"}
            Icon={commonIcons.shareIcon}
            iconColor="var(--black)"
            iconSize={18}
            showIcon={true}
            loading={false}
            disabled={false}
            customClass="bg-transparent w-max"
          />
        </span>
      </div>
      <div className="w-full col-all-start gap-y-4">
        <Image
          src={
            "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735341003/acts-of-the-name_dud4ov.jpg"
          }
          alt="Post Placeholder"
          width={1024}
          height={48}
          className={
            "w-[100%] h-[7.5rem] object-cover rounded-md items-centered"
          }
        />
        <Heading
          text={"Acts of The Name with: Fuakye, John Lawrence."}
          type={"h5"}
          customClass={
            "!w-[100%] py-1 px-4 !border !border-[var(--trademark-color-mauve-2)] bg-[var(--light)] !text-black text-xs rounded-md"
          }
        />
        <div className="w-full row-content-between">
          <IconInstance
            Icon={commonIcons.calendar}
            iconColor="var(--trademark-color-fire-gold)"
            iconSize={18}
            //   customClass=""
          />
          <span className="row-content-end font-medium text-gray-400 text-xs">
            {new Date().toDateString()}
          </span>
        </div>
        <div className="col-all-start w-full gap-y-1">
          <Heading
            text={"About this event"}
            type={"h5"}
            customClass={"!w-[100%] h-max py-1 px-0 !text-black text-xs "}
          />
          <p className={"w-full h-max text-black text-xs leading-6"}>
            Daily word and news from The Name School World-Wide as is from The
            Spirit. Daily word and news from The Name School World-Wide as is
            from The Spirit...
          </p>
        </div>
      </div>
      <ButtonInstance
        onClick={() => console.log("3")}
        customClass={"w-[100%] flex self-center text-white"}
        showIcon={true}
        Icon={commonIcons.ticketIcon}
        iconColor={"var(--white)"}
        iconSize={18}
        iconPosition={"right"}
        label={"Get a ticket"}
        title={"Register for a ticket"}
        buttonColor={"mauve-b"}
      />
    </section>
  );
}
