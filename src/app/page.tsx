'use client'
import { ERole, signIn, signUp } from "@/services/auth";
import { ContainerAuth, ContainerAuthLeft, ContainerAuthRight, ContainerHalf, TitleLeft, TitleRight } from "./page.styled";
import { InputPassword, Inputs } from "@/components/inputs";
import { useForm } from "react-hook-form";
import { textBranding } from "./page.constants";
import { Spacer } from "@/components/spacer";
import { Buttons } from "@/components/buttons";
import { EInputType } from "@/components/form-inputs/form-inputs.enum";
import { useMemo } from "react";
import { EAuthFieldName } from "./page.enum";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { TLoginField } from "./page.type";
import FormInputs from "@/components/form-inputs";
import { EDefaultValues } from "@/utils/utils.enum";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  const schema = useMemo(() => {
    return yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    });
  }, []);
  
  const inputFields = useMemo(() => {
    return [
      {
          inputType: EInputType.TEXT_FIELD,
          controlName: EAuthFieldName.EMAIL,
          title: "Email",
          placeholder: "john.doe@gmail.com",
          isRequired: true
      },
      {
          inputType: EInputType.TEXT_FIELD_PASSWORD,
          controlName: EAuthFieldName.PASSWORD,
          title: "Password",
          placeholder: "******",
          isRequired: true,     
      },
    ]
  }, []);

  const {
    control: control,
    handleSubmit: handleSubmit,
    formState: { isValid },
    setValue: setValue,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
        email: EDefaultValues.STRING,
        password: EDefaultValues.STRING,
    } as TLoginField,
  });

  const onSubmit = () => {
    const { email, password } = control._formValues as TLoginField;
    signIn(email, password).then(res => {
      if (res) {
        router.push('/dashboard')
      }
    }).catch(() => {
      alert('Invalid Credentials')
    })
  }

  return (
    <ContainerAuth>
      
        <ContainerAuthLeft $isForm={false} $isVisible={true}>
          {textBranding.map((text: string) => (
            <TitleLeft>{text}</TitleLeft>
          ))}
        </ContainerAuthLeft>
      
      
        <ContainerAuthRight $isForm={true} $isVisible={true}>
        <TitleRight>Welcome, <br />Please Login here</TitleRight>
        <FormInputs 
          inputFields={inputFields}
          formControl={control}
          setFormControl={setValue}
        />
        <Spacer $height={30} />
        <Buttons title="Login" onClick={handleSubmit(onSubmit)} disabled={!isValid} />
        </ContainerAuthRight>
      
    </ContainerAuth>
  );
}
