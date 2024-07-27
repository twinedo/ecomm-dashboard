import React from 'react'
import { TFormInputs, TInputField } from './form-inputs.type'
import { Controller } from 'react-hook-form';
import { EInputType } from './form-inputs.enum';
import { Inputs, InputPassword } from '../inputs';
import { Spacer } from '../spacer';
import { Column } from '../column';

function FormInputs(props: TFormInputs) {
    const { inputFields, formControl, setFormControl, errors } = props;
    return (
        <div>
            <Column>
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
                            case EInputType.PASSWORD:
                                //password
                                return (
                                    <InputPassword isError={errors && errors[inputField.controlName] ? true : false} title={inputField.title} placeholder={inputField.placeholder} onChange={onChange} onBlur={onBlur} value={value} />
                                )
                            default:
                                return (
                                    <Inputs isError={errors && errors[inputField.controlName] ? true : false} title={inputField.title} placeholder={inputField.placeholder} onChange={onChange} onBlur={onBlur} value={value} />
                                )
                        }
                    }}
                />
            ))}
            <Spacer $height={30} />
            </Column>
        </div>
    )
}

export default FormInputs