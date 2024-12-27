import { LinkInstance } from "@/components/globals/elements/links";

export default function BlogCategories() {
  const blogCats = [
    { label: "General", route: "/blog/general" },
    { label: "Events", route: "/blog/events" },
    { label: "Melatao", route: "/blog/melatao" },
    { label: "Tracts", route: "/blog/tracts" },
  ];
  return (
    <div className="lg:w-1/4 lg:col-all-start">
      <nav className="lg:col-all-start w-full h-full gap-x-2 gap-y-4">
        {blogCats?.map((_link: any, _idx: number) => (
          <LinkInstance
            customClass={""}
            target={"_blank"}
            showLabel={true}
            label={_link.label}
            route={_link.route}
            showIcon={_link.showIcon}
            iconColor={"var(--black)"}
            iconPosition="right"
          />
        ))}
      </nav>
    </div>
  );
}
