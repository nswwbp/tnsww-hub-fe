import { LinkInstance } from "@/components/globals/elements/links";
import { Heading } from "@/components/globals/elements/typography";
import Image from "next/image";

export default function AllBlogPosts() {
  return (
    <section className="lg:w-3/4 h-max col-all-start gap-y-4">
      {[...Array(4)]?.map((_posts, _idx: number) => (
        <div className="w-full h-max lg:row-content-between items-start border-b border-[var(--light)] py-4">
          <span className="w-[20%] h-[8rem] col-items-centered">
            <Image
              src={
                "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
              }
              alt="Post Placeholder"
              width={200}
              height={48}
              className={
                "w-[7.5rem] h-[7.5rem] object-contain rounded-full flex items-centered"
              }
            />
          </span>
          <div className="w-[75%] h-max col-all-start gap-y-4">
            <LinkInstance
              customClass={"text-black text-sm !px-0 font-bold"}
              showLabel={true}
              label={"Acts of The Name:  The event to never miss."}
              route={`/blog/read?p=${_idx}`}
            />
            {/* <Heading
              text={"Acts of The Name:  The event to never miss."}
              type={"h5"}
              customClass={"text-black text-sm"}
            /> */}
            <p className={"text-black text-sm leading-6"}>
              Daily word and news from The Name School World-Wide as is from The
              Spirit. Daily word and news from The Name School World-Wide as is
              from The Spirit. Daily word and news from The Name School
              World-Wide as is from The Spirit. Daily word and news from The
              Name School World-Wide as is from The Spirit.
            </p>
            <div className={"w-full row-all-start gap-x-4"}>
              <Image
                src={
                  "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
                }
                alt="Post Placeholder"
                width={200}
                height={48}
                className={"w-[2.5rem] h-[2.5rem] object-contain rounded-full"}
              />
              <span className="w-max col-all-start">
                <p className="text-sm font-bold w-full text-black">
                  De Baptizer
                </p>
                <p className="text-gray-400 text-xs font-medium">20 Jan 2024</p>
                <p></p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
