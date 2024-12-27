import {
  ChangeEventHandler,
  ElementType,
  FocusEventHandler,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";

export interface ICardsProps {
  pageTitle: string;
  children: ReactNode;
}

export interface IButtonProps {
  loading?: boolean;
  onClick: Function | MouseEvent | KeyboardEvent | TouchEvent | any;
  customClass?: string;
  disabled?: boolean;
  showIcon?: true;
  Icon?: ElementType | any;
  iconColor?: string;
  iconSize?: string | number;
  iconPosition?: string;
  label?: string;
  customStyle?: React.CSSProperties;
  buttonType?: "button" | "submit" | "reset" | undefined;
  title: string;
  buttonColor: string;
}
export interface IActionButtonProps {
  loading?: boolean;
  onClick: Function | MouseEvent | KeyboardEvent | TouchEvent | any;
  customClass?: string;
  disabled?: boolean;
  showIcon?: true;
  Icon: ElementType;
  iconColor?: string;
  iconSize?: string | number;
  iconPosition?: string;
  label?: string;
  customStyle?: React.CSSProperties;
  buttonType?: "button" | "submit" | "reset" | undefined;
  title?: string;
  buttonColor?: string;
}

export interface IIconProps {
  Icon: ElementType;
  iconColor: string;
  iconSize: string | number;
  customClass?: string;
}

export interface IllustrationsProps {
  message?: string;
  illustratuibType?: string;
}

export interface IInputProps {
  showIcon?: boolean;
  Icon: ElementType;
  iconColor?: string;
  iconSize?: number;
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  inputType?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string | number;
  value?: string | number;
  onChangeVal: Function;
  error?: string;
  customError?: string;
  customformInputStyle?: React.CSSProperties;
  min?: number;
  max?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  onFocus?: FocusEventHandler;
}

export interface IllustrationsProps {
  message?: string;
  illustratuibType?: string;
}

export interface ILabelProps {
  label: string;
  htmlFor: string;
  requiredMarker?: boolean;
  customLabelClass?: string;
}

export interface IHeadingProps {
  text: string;
  type?: string;
  customClass?: string;
}

export interface IErrorNotifProps {
  message: string;
  customClass?: string;
}

export interface ISelectProps {
  id: string | any;
  showLabel: boolean;
  label: string;
  required: boolean;
  name: string;
  // options: Array<{ label: string | number; value: string | number }>;
  options: Array<any>;
  defaultValue: string | number;
  value: string | number;
  placeholder: string;
  isSearchable: boolean;
  onChange: Function;
  error: string;
  customError: string;
  customStyles: React.CSSProperties;
  customLabelClass: string;
}

export interface IMultiRadioGroupProps {
  name: string;
  radioItems: Array<any>;
  required: boolean;
  customLabelClass: string;
  customformInputStyle: React.CSSProperties;
  selectedItem: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
export interface ICheckboxInputProps {
  name: string;
  label: string;
  value: string | number;
  checked: boolean;
  disabled: boolean;
  radioItems: Array<any>;
  required: boolean;
  customLabelClass: string;
  customformInputStyle: React.CSSProperties;
  selectedItem: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IDateInputProps {
  name: string;
  showLabel: string;
  label: string;
  required: boolean;
  showIcon: string;
  Icon: ElementType;
  iconColor: string;
  iconSize: number;
  error: string;
  customError: string;
  showWeekNumbers: boolean;
  selected: Date;
  startDate: Date;
  endDate: Date;
  onDateChange:
    | Function
    | MouseEvent<HTMLElement, MouseEvent>
    | KeyboardEvent<HTMLElement>
    | any;
  placehoderText: string;
  selectsRange: boolean;
  showTimeSelect: boolean;
  dateFormat: string;
  timeIntervals: number;
  minDate: Date;
  maxDate: Date;
  customformInputStyle: React.CSSProperties;
  customLabelClass: string;
  readOnly: string;
}

export interface ICheckboxInputProps {
  name: string;
  label: string;
  value: string | number;
  checked: boolean;
  disabled: boolean;
  radioItems: Array<any>;
  required: boolean;
  customClass: string;
  customformInputStyle: React.CSSProperties;
  selectedItem: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export interface ILinksProps {
  customClass?: string;
  target?: string;
  showLabel: boolean;
  label: string;
  route: string;
  showIcon?: boolean;
  iconColor?: string;
  Icon?: ElementType;
  iconPosition?: string;
  customLabelClass?: string;
}

export interface ITablePreloaderProps {
  // loading
  message: string;
}

export interface ITablePreloaderProps {
  message: string;
}
export interface IAltButtonLoaderProps {
  customClass?: string;
}
