import { commonIcons, IconInstance } from "@/components/globals/elements/icons";
import { LinkInstance } from "@/components/globals/elements/links";
import { Heading } from "@/components/globals/elements/typography";
import MappedLocationFrame from "@/components/globals/misc/mapFrame";
import Image from "next/image";
import Link from "next/link";

export default function EventsPane() {
  const mapData = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.079258715623!2d-0.31260702501486115!3d5.555269294425129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbd669cbbe7c1%3A0x869aa0d2b39650a3!2sThe%20Throne%20Worship%20Centre!5e0!3m2!1sen!2sgh!4v1735303899555!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
  return (
    <section className="col-all-start w-[60%] sm:xs:w-full gap-y-4 h-[80vh] pb-5 overflow-y-auto">
      <MappedLocationFrame mapLocation={mapData} />
      <div className="w-full col-all-start !gap-y-6 px-4">
        <div className="w-full col-all-start gap-y-4 new" id="new">
          <Heading
            text={"New"}
            type={"h5"}
            customClass={
              "!w-max py-1 px-4 !border !border-[var(--trademark-color-mauve-2)] bg-[var(--light)] !text-black text-xs rounded-full"
            }
          />
          <div className="min-w-[100%] h-max  overflow-x-auto lg:grid-4-cols md:grid-2-cols">
            {[...Array(4)].map((_, _idx: number) => (
              <Link
                href={`#p=${_idx}`}
                className="w-full h-[14rem] col-all-start gap-y-4 border border-[var(--light)] px-2 py-2"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
                  }
                  alt="Post Placeholder"
                  width={200}
                  height={48}
                  className={
                    "w-[100%] h-[4.5rem] object-contain flex items-centered"
                  }
                />
                <Heading
                  customClass={
                    "!w-[100%] text-center !text-black text-xs !px-0 font-medium"
                  }
                  text={"Acts of The Name: The event to never miss."}
                  type={`h5`}
                />
                <div className={"w-full col-all-start gap-y-4"}>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400 font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.business}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold">De Baptizer</i>
                  </span>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400  font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.calendar}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold"> 20 Jan 2024</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full col-all-start gap-y-4 popular" id="popular">
          <Heading
            text={"Popular"}
            type={"h5"}
            customClass={
              "!w-max py-1 px-4 !border !border-[var(--trademark-color-mauve-3)] bg-[var(--light)] !text-black text-xs rounded-full"
            }
          />
          <div className="min-w-[100%] h-max overflow-x-auto lg:grid-4-cols md:grid-2-cols">
            {[...Array(4)].map((_, _idx: number) => (
              <Link
                href={`#p=${_idx}`}
                className="w-full h-[14rem] col-all-start gap-y-4 border border-[var(--light)] px-2 py-2"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
                  }
                  alt="Post Placeholder"
                  width={200}
                  height={48}
                  className={
                    "w-[100%] h-[4.5rem] object-contain flex items-centered"
                  }
                />
                <Heading
                  customClass={
                    "!w-[100%] text-center !text-black text-xs !px-0 font-medium"
                  }
                  text={"Acts of The Name: The event to never miss."}
                  type={`h5`}
                />
                <div className={"w-full col-all-start gap-y-4"}>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400 font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.business}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold">De Baptizer</i>
                  </span>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400  font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.calendar}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold"> 20 Jan 2024</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full col-all-start gap-y-4 featured" id="featured">
          <Heading
            text={"Featured"}
            type={"h5"}
            customClass={
              "!w-max py-1 px-4 !border !border-[var(--trademark-color-dirt-gold)] bg-[var(--light)] !text-black text-xs rounded-full"
            }
          />
          <div className="min-w-[100%] h-max overflow-x-auto lg:grid-4-cols md:grid-2-cols">
            {[...Array(4)].map((_, _idx: number) => (
              <Link
                href={`#p=${_idx}`}
                className="w-full h-[14rem] col-all-start gap-y-4 border border-[var(--light)] px-2 py-2"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
                  }
                  alt="Post Placeholder"
                  width={200}
                  height={48}
                  className={
                    "w-[100%] h-[4.5rem] object-contain flex items-centered"
                  }
                />
                <Heading
                  customClass={
                    "!w-[100%] text-center !text-black text-xs !px-0 font-medium"
                  }
                  text={"Acts of The Name: The event to never miss."}
                  type={`h5`}
                />
                <div className={"w-full col-all-start gap-y-4"}>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400 font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.business}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold">De Baptizer</i>
                  </span>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400  font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.calendar}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold"> 20 Jan 2024</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className="w-full col-all-start gap-y-4 all-events"
          id="all-events"
        >
          <Heading
            text={"All events"}
            type={"h5"}
            customClass={
              "!w-max py-1 px-4 !border !border-[var(--black-shade-2)] bg-[var(--light)] !text-black text-xs rounded-full"
            }
          />
          <div className="min-w-[100%] h-max overflow-x-auto lg:grid-4-cols md:grid-2-cols gap-y-4">
            {[...Array(10)].map((_, _idx: number) => (
              <Link
                href={`#p=${_idx}`}
                className="w-full h-[14rem] col-all-start gap-y-4 border border-[var(--light)] px-2 py-2"
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dcr4exnjs/image/upload/v1735224183/name-school-logo_awvgry.svg"
                  }
                  alt="Post Placeholder"
                  width={200}
                  height={48}
                  className={
                    "w-[100%] h-[4.5rem] object-contain flex items-centered"
                  }
                />
                <Heading
                  customClass={
                    "!w-[100%] text-center !text-black text-xs !px-0 font-medium"
                  }
                  text={"Acts of The Name: The event to never miss."}
                  type={`h5`}
                />
                <div className={"w-full col-all-start gap-y-4"}>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400 font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.business}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold">De Baptizer</i>
                  </span>
                  <span className="w-full row-all-start text-xs font-bold text-gray-400  font-medium gap-x-2">
                    <IconInstance
                      Icon={commonIcons.calendar}
                      iconColor="var(--light-ii)"
                      iconSize={15}
                      //   customClass=""
                    />{" "}
                    <i className="font-bold"> 20 Jan 2024</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
