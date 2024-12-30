import { Heading } from "../globals/elements/typography";
import AllBlogPosts from "./subs/blogPosts";
import BlogCategories from "./subs/categories";

export default function Blogs() {
  return (
    <div className="w-full h-max col-all-start">
      <section className="w-full h-max col-all-start py-6 border-y-2  border-y-[var(--light)] gap-y-2">
        <Heading
          text={"Inspired by the Spirit"}
          type={"h5"}
          customClass={
            "py-1 px-4 !border !border-[var(--black-shade-2)] bg-[var(--light)] text-black text-xs rounded-full"
          }
        />
        <Heading
          text={"Sermon recaps, Interviews, Thoughts, from The Name ..."}
          type={"h5"}
          customClass={"text-black"}
        />
        <p className={"text-black text-sm"}>
          Daily word and news from The Name School World-Wide as is, from The
          Spirit.
        </p>
      </section>
      <section className="w-full pt-6 h-max lg:row-content-between !justify-start !items-start">
        <BlogCategories />
        <AllBlogPosts />
      </section>
    </div>
  );
}
