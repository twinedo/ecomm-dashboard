import { ButtonHTMLAttributes, ReactNode } from "react";

export type TButtons = {
    prefix?: ReactNode;
    postfix?: ReactNode;
    title?: string;
    children?: ReactNode | string;
  } & ButtonHTMLAttributes<HTMLButtonElement>