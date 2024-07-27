import React from 'react'
import { TFormInputs, TInputField } from './form-inputs.type'
import { Controller } from 'react-hook-form';
import { EInputType } from './form-inputs.enum';
import { Inputs, InputPassword } from '../inputs';

function FormInputs(props: TFormInputs) {
    const { inputFields, formControl, setFormControl } = props;
    return (
        <div>
            {inputFields.map((inputField: TInputField, index: number) => (
                <Controller
                    name={inputField.controlName}
                    control={formControl}
                    render={({ field: { onChange, onBlur, value } }) => {
                        switch (inputField.inputType) {
                            case EInputType.DROPDOWN:
                                //dropdown
                                return <div></div>
                            case EInputType.DATE:
                                //date
                                return <div></div>
                            case EInputType.TEXT_FIELD_PASSWORD:
                                //password
                                return (
                                    <InputPassword title={inputField.title} placeholder={inputField.placeholder} onChange={onChange} onBlur={onBlur} value={value} />
                                )
                            default:
                                return (
                                    <Inputs title={inputField.title} placeholder={inputField.placeholder} onChange={onChange} onBlur={onBlur} value={value} />
                                )
                        }
                    }}
                />
            ))}
        </div>
    )
}

export default FormInputs