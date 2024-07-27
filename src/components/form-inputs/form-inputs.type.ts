import { Control, UseFormSetValue } from "react-hook-form";
import { EInputType, ETextType, ETransformCase } from "./form-inputs.enum";

export type DropdownFields = {
    id?: string;
    label: string;
    value: string;
  }

export type TInputField = {
    inputType: EInputType;
    controlName: string;
    title: string;
    placeholder: string;
    minLength?: number | 0;
    maxLength?: number | 0;
    type?: ETextType;
    isRequired?: boolean;
    isHide?: boolean;
    isDisabled?: boolean;
    dropdownOptions?: DropdownFields[]; // dropdown mode
    formatDate?: string; // date mode
    tooltipDesc?: string;
    transform?: ETransformCase;
  }

export type TFormInputs = {
    inputFields: TInputField[];
    formControl: Control<any>;
    setFormControl?: UseFormSetValue<any>
}