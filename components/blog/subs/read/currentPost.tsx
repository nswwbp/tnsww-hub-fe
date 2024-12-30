import { Heading } from "@/components/globals/elements/typography";
import Image from "next/image";

export default function CurrentBlogPost() {
  return (
    <section className="lg:row-content-between items-start w-full h-max">
      <div className="h-[80vh] w-1/3 bg-gradient-to-r from-[#8b366f] to-[#7d326a] rounded-l-lg col-all-centered">
        <Image
          src={
            "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
          }
          alt="Post Placeholder"
          width={200}
          height={48}
          className={"w-[5.5rem] h-[5.5rem] object-contain rounded-full"}
        />
        <span className="w-max col-all-centered gap-y-4">
          <p className="text-sm font-bold w-full text-white">De Baptizer</p>
          <p className="text-white text-xs font-medium">20 Jan 2024</p>
          <p></p>
        </span>
      </div>
      <div className="h-[80vh] w-2/3 overflow-y-auto col-all-start gap-y-4 px-6">
        <Heading
          text={"Melatao"}
          type={"h5"}
          customClass={
            "py-1 px-4 !border !border-[var(--black-shade-2)] bg-[var(--light)] text-black text-xs rounded-full"
          }
        />
        <Heading
          text={"Melatao: Day 1"}
          type={"h5"}
          customClass={"text-black text-sm"}
        />
        {[...Array(7)].map((_, _idx: number) => {
          return (
            <p key={_idx} className={"text-black text-sm leading-6"}>
              Daily word and news from The Name School World-Wide as is from The
              Spirit. Daily word and news from The Name School World-Wide as is
              from The Spirit. Daily word and news from The Name School
              World-Wide as is from The Spirit. Daily word and news from The
              Name School World-Wide as is from The Spirit.
            </p>
          );
        })}
      </div>
    </section>
  );
}
