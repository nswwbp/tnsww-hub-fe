import CurrentBlogPost from "./subs/read/currentPost";
import AllRelatedPosts from "./subs/read/relatedPosts";

export default function BlogDetails() {
  return (
    <div className="w-full h-max col-all-start gap-y-6">
      <CurrentBlogPost />
      <AllRelatedPosts />
    </div>
  );
}
