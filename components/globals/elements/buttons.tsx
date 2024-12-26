import { IActionButtonProps, IButtonProps } from "@/@types/elements";
import { IconInstance } from "./icons";
import { AltButtonLoader, ButtonLoader } from "./loader";

export const ButtonInstance = ({
  loading,
  onClick,
  customClass,
  disabled,
  showIcon,
  Icon,
  iconColor,
  iconSize,
  iconPosition,
  label,
  buttonType,
  customStyle,
  title,
  buttonColor,
}: IButtonProps) => {
  return (
    <button
      title={title ?? ""}
      className={`global-button ${
        buttonColor == "mauve"
          ? "bg-[var(--trademark-color-mauve)]"
          : buttonColor == "mauve-b"
          ? "bg-[var(--trademark-color-mauve-2)]"
          : buttonColor == "mauve-c"
          ? "bg-[var(--trademark-color-mauve-3)]"
          : buttonColor == "white"
          ? "bg-[var(--white)]"
          : "bg-[var(--black)]"
      } text-${iconColor ?? "white"} ${customClass} ${
        disabled && "bg-gray-400"
      }`}
      onClick={onClick}
      type={buttonType ?? "button"}
      disabled={disabled}
    >
      {loading ? (
        <ButtonLoader />
      ) : (
        <>
          {showIcon && iconPosition === "left" && (
            <>
              <IconInstance
                Icon={Icon}
                iconSize={iconSize ?? 22}
                iconColor={iconColor ?? `var(--white)`}
              />
            </>
          )}
          {label && (
            <label className={iconColor ? `text-${iconColor}` : `text-white`}>
              {label}
            </label>
          )}
          {((showIcon && iconPosition === "right") ||
            (showIcon && !iconPosition)) && (
            <>
              <IconInstance
                Icon={Icon}
                iconSize={iconSize ?? 22}
                iconColor={iconColor ?? `var(--white)`}
              />
            </>
          )}
        </>
      )}
    </button>
  );
};

export const ActionButtonInstance = ({
  onClick,
  customClass,
  title,
  disabled,
  Icon,
  iconColor,
  iconSize,
  buttonColor,
  loading,
}: IActionButtonProps) => {
  return (
    <button
      title={title ?? "Click"}
      className={`row-all-centered px-16 py-3 ${
        buttonColor == "black"
          ? "bg-[var(--memphis-black-500)]"
          : buttonColor == "white"
          ? "bg-[var(--white)]"
          : "bg-[var(--memphis-black-300)]"
      } text-${iconColor ?? "white"} rounded ${customClass} ${
        disabled && "bg-gray-400"
      }`}
      onClick={onClick}
      type={"button"}
      disabled={disabled}
    >
      {loading ? (
        <AltButtonLoader />
      ) : (
        <IconInstance
          Icon={Icon}
          iconSize={iconSize ?? 17}
          iconColor={iconColor ?? `var(--white)`}
        />
      )}
    </button>
  );
};
