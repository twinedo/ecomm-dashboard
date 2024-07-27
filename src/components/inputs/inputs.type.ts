import { InputHTMLAttributes, ReactNode } from "react";

export type TInputs = {
    prefix?: ReactNode;
    postfix?: ReactNode;
    title?: string;
    isError?: boolean;
  } & InputHTMLAttributes<HTMLInputElement>