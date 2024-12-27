import { commonIcons } from "@/components/globals/elements/icons";
import { RegularInput } from "@/components/globals/elements/inputs";
import { Heading } from "@/components/globals/elements/typography";

export default function EventFilter() {
  return (
    <section className="w-[20%] py-4 px-2 col-all-start gap-y-4 h-[80vh] shadow-md rounded-l-md">
      <RegularInput
        showIcon={true}
        Icon={commonIcons.searchicon}
        iconColor={"var(--light-ii)"}
        iconSize={20}
        showLabel={false}
        inputType={"search"}
        name={"search-events"}
        placeholder={"Search events ..."}
        defaultValue={""}
        onChangeVal={(e: any) => console.log("e-->", e)}
      />
      <div className="w-full gap-y-4 col-all-start">
        <Heading
          text={"Recent searches"}
          type={"h5"}
          customClass={
            "!w-max py-1 px-4 !border !border-[var(--white)] bg-[var(--light)] !text-black text-xs rounded-full"
          }
        />
        <div className="w-full grid-2-cols gap-y-4 !flex-wrap">
          {[...Array(10)].map((_, _idx: number) => {
            return (
              <Heading
                text={"Acts of the..."}
                type={"h5"}
                customClass={
                  "!w-max py-1 px-4 !border !border-[var(--trademark-color-mauve-2)] bg-[var(--white)] !text-black text-xs rounded-full"
                }
              />
            );
          })}{" "}
        </div>
      </div>
    </section>
  );
}
