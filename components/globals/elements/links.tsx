import Link from "next/link";
import { commonIcons, IconInstance } from "./icons";
import { ILinksProps } from "@/@types/elements";

export const LinkInstance = ({
  customClass,
  target,
  showLabel,
  label,
  route,
  showIcon,
  iconColor,
  Icon,
  iconPosition,
  customLabelClass,
}: ILinksProps) => {
  return (
    <Link
      href={route ?? "#"}
      target={target ?? "_self"}
      className={`global-link w-full ${customClass}`}
    >
      {((showIcon && !iconPosition) ||
        (showIcon && iconPosition == "left")) && (
        <IconInstance
          Icon={Icon ?? commonIcons.externalLink}
          iconColor={iconColor ?? "var(--white)"}
          iconSize={15}
        />
      )}
      {showLabel && (
        <span className={`w-max text-sm ${customLabelClass}`}>{label}</span>
      )}
      {(showIcon && !iconPosition) ||
        (showIcon && iconPosition == "right" && (
          <IconInstance
            Icon={Icon ?? commonIcons.externalLink}
            iconColor={iconColor ?? "var(--white)"}
            iconSize={15}
          />
        ))}
    </Link>
  );
};
