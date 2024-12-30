import { LinkInstance } from "@/components/globals/elements/links";
import { Heading } from "@/components/globals/elements/typography";
import Image from "next/image";

export default function AllRelatedPosts() {
  return (
    <div className="w-full col-all-start gap-y-4">
      <Heading
        text={"Related Posts"}
        type={"h5"}
        customClass={
          "py-1 px-4 !border !border-[var(--trademark-color-mauve-2)] bg-[var(--white)] text-black text-xs rounded-full"
        }
      />{" "}
      <section className="w-full h-max grid-4-cols gap-x-10">
        {[...Array(4)]?.map((_posts, _idx: number) => (
          <div className="w-[100%] h-max col-all-start items-start border border-[var(--light)] py-4 px-4 shadow-md">
            <span className="w-full h-[8rem] col-items-centered">
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
            <div className="w-full h-max col-all-start gap-y-4">
              <LinkInstance
                customClass={
                  "text-black text-sm !px-0 font-medium !w-[100%] h-max"
                }
                showLabel={true}
                label={"Acts of The Name:  The event to never miss."}
                route={`/blog/read?p=${_idx}`}
              />

              <div className={"w-full row-content-between gap-x-4"}>
                <p className="text-sm font-bold w-1/2 text-black">
                  De Baptizer
                </p>
                <p className="w-1/2 text-gray-400 text-xs font-medium">
                  20 Jan 2024
                </p>{" "}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
