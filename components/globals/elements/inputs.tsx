import formStyles from "@/app/styles/forms.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "react-widgets/styles.css";
import { IconInstance } from "./icons";
import {
  ICheckboxInputProps,
  IDateInputProps,
  IInputProps,
  IMultiRadioGroupProps,
  ISelectProps,
} from "@/@types/elements";
import { ErrorNotif, LabelInstance } from "./typography";

//misc input stubs
export const RequiredMarker = () => {
  return <sup className="text-[var(--danger)]">*</sup>;
};

const formInputWrapper = `w-[100%] h-max col-all-start gap-y-4`;
const globalInputClass = `w-full flex justify-start items-center gap-x-[0.75rem] py-[0.25rem] px-[0.5rem] rounded-[var(--radius-min)] bg-[var(--white)] border border-t-gray-200`;

//regular input
export const RegularInput = ({
  showIcon,
  Icon,
  iconColor,
  iconSize,
  showLabel,
  label,
  required = false,
  inputType,
  name,
  placeholder,
  defaultValue,
  value,
  onChangeVal,
  error,
  customError,
  customformInputStyle,
  min,
  max,
  disabled,
  autoFocus,
  onFocus,
}: IInputProps) => {
  return (
    <div className={formInputWrapper} style={customformInputStyle}>
      {showLabel && (
        <LabelInstance
          htmlFor={name}
          label={label ?? ""}
          requiredMarker={required}
          //  customLabelClass={customLabelClass ?? ""}
        />
      )}
      <div
        className={`${globalInputClass} ${
          disabled && "!bg-[var(--light-ii)] cursor-not-allowed"
        }`}
      >
        {showIcon && (
          <IconInstance
            Icon={Icon}
            iconColor={iconColor ?? `var(--black-shade-1)`}
            iconSize={iconSize ?? 25}
          />
        )}
        <input
          type={inputType ?? "text"}
          name={name}
          defaultValue={defaultValue}
          value={value}
          // className={formStyles.inputElement}
          className={`h-7 w-full appearance-none rounded py-2 pl-2 leading-tight text-gray-700 !placeholder-gray-500 focus:outline-1 focus:outline-slate-100 !border-0  !text-[0.8rem] !text-[var(--black)] ${
            disabled && "bg-[var(--light-ii)] cursor-not-allowed"
          }`}
          placeholder={placeholder}
          onChange={(e) => onChangeVal(e)}
          id={`input-field-${name}`}
          min={min}
          maxLength={max}
          disabled={disabled}
          autoFocus={autoFocus ?? false}
          onFocus={onFocus}
        />
      </div>
      {(error || customError) && (
        <ErrorNotif message={error || customError || ""} />
      )}
    </div>
  );
};

//select input
export const RegularSelect = ({
  id,
  showLabel,
  label,
  required,
  name,
  options,
  defaultValue,
  value,
  placeholder = "Select...",
  isSearchable = true,
  onChange,
  error,
  customError,
  customStyles,
  customLabelClass = "",
}: ISelectProps) => {
  return (
    <div className={formInputWrapper} style={{ width: "100%" }}>
      {label && (
        <LabelInstance
          label={label ?? ""}
          htmlFor={name}
          requiredMarker={required}
          customLabelClass={customLabelClass ?? ""}
        />
      )}
      <div>
        <Select
          id={id}
          name={name}
          options={options}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          className={`h-10 w-full appearance-none rounded py-2 text-sm leading-tight text-umo-blue-950 outline-0 !border-0 mb-3 ${customStyles}`}
          isSearchable={isSearchable}
          onChange={(e) => onChange(e)}
        />
      </div>
      {(error || customError) && <ErrorNotif message={error} />}
    </div>
  );
};

//radio button
export const MultiRadioButtonInput = ({
  name,
  radioItems,
  required = false,
  customLabelClass,
  customformInputStyle,
  selectedItem,
  handleChange,
}: IMultiRadioGroupProps) => {
  return (
    <>
      {radioItems?.map((_radioItem, _idx) => (
        <div
          key={_idx}
          className={`w-min-[5rem] w-max row-content-between px-0 py-0 gap-x-6`}
          style={customformInputStyle}
        >
          <input
            type="radio"
            value={_radioItem?.value}
            checked={selectedItem === _radioItem.value}
            name={name}
            onChange={handleChange}
          />
          <LabelInstance
            label={_radioItem.label ?? ""}
            htmlFor={name}
            requiredMarker={required}
            customLabelClass={customLabelClass ?? "font-light"}
          />
        </div>
      ))}
    </>
  );
};

//check box input
export const CheckboxInput = ({
  name,
  label,
  value,
  required = false,
  customLabelClass,
  customformInputStyle,
  checked,
  handleChange,
  disabled,
}: ICheckboxInputProps) => {
  return (
    <div
      className={`w-min-[5rem] w-max row-content-between px-0 py-0 gap-x-6`}
      style={customformInputStyle}
    >
      <input
        type="checkbox"
        value={value}
        checked={checked}
        name={name}
        onChange={handleChange}
        disabled={disabled}
      />
      <LabelInstance
        htmlFor={name}
        label={label ?? ""}
        requiredMarker={required}
        customLabelClass={customLabelClass ?? "w-max"}
      />
    </div>
  );
};

//date input
export const DateInput = ({
  name,
  showWeekNumbers,
  selected,
  startDate,
  endDate,
  onDateChange,
  placehoderText,
  selectsRange,
  showTimeSelect,
  dateFormat,
  timeIntervals,
  minDate,
  maxDate,
  customformInputStyle,
  customLabelClass,
  showLabel,
  label,
  required = false,
  showIcon,
  Icon,
  iconColor,
  iconSize,
  error,
  customError,
  readOnly,
}: IDateInputProps) => {
  return (
    <div className={formInputWrapper} style={customformInputStyle}>
      {showLabel && (
        <LabelInstance
          htmlFor={name}
          label={label ?? ""}
          requiredMarker={required}
          customLabelClass={customLabelClass ?? ""}
        />
      )}
      <div
        className={`${globalInputClass} ${
          readOnly && "!bg-[var(--light-ii)] cursor-not-allowed"
        }`}
      >
        {showIcon && (
          <IconInstance
            Icon={Icon}
            iconColor={iconColor ?? `var(--black-shade-1)`}
            iconSize={iconSize ?? 25}
          />
        )}
        <DatePicker
          showWeekNumbers={showWeekNumbers}
          selected={selected}
          onChange={onDateChange}
          selectsRange={true}
          timeIntervals={timeIntervals}
          startDate={startDate}
          endDate={endDate}
          placeholderText={placehoderText ?? "Select a date"}
          className={`border-none outline-none !py-0 !h-7`}
          showTimeSelect={showTimeSelect}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat={dateFormat}
          dateFormatCalendar="MMMM"
          showYearDropdown
          yearDropdownItemNumber={1000}
          scrollableYearDropdown
        />
      </div>
      {(error || customError) && <ErrorNotif message={error || customError} />}
    </div>
  );
};
