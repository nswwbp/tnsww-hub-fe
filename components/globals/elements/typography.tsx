import {
  IErrorNotifProps,
  IHeadingProps,
  IIconProps,
  ILabelProps,
} from "@/@types/elements";

export const ErrorNotif = ({ message, customClass }: IErrorNotifProps) => {
  return (
    <span className={`text-xs font-medium text-[var(--danger)] ${customClass}`}>
      {message}
    </span>
  );
};

export const RequiredMarker = () => {
  return <sup className="text-red-500">*</sup>;
};

export const LabelInstance = ({
  label,
  htmlFor,
  requiredMarker,
  customLabelClass,
}: ILabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm text-black-500 font-medium ${customLabelClass}`}
    >
      {label} {requiredMarker && <RequiredMarker />}
    </label>
  );
};
export const Heading = ({ text, type, customClass }: IHeadingProps) => {
  return (
    <>
      {type == "h1" ? (
        <h1 className={`font-bold text-white text-5xl ${customClass}`}>
          {text}
        </h1>
      ) : type == "h2" ? (
        <h2 className={`font-bold text-white text-4xl  ${customClass}`}>
          {text}
        </h2>
      ) : type == "h3" ? (
        <h3 className={`font-bold text-white text-3xl  ${customClass}`}>
          {text}
        </h3>
      ) : type == "h4" ? (
        <h4 className={`font-bold text-white text-2xl ${customClass}`}>
          {text}
        </h4>
      ) : type == "h5" ? (
        <h5 className={`font-bold text-white text-xl  ${customClass}`}>
          {text}
        </h5>
      ) : (
        <h5 className={`font-bold text-white text-normal ${customClass}`}>
          {text}
        </h5>
      )}
    </>
  );
};
