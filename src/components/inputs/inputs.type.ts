import { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

export type TInputs = {
	prefix?: ReactNode | ReactElement;
	postfix?: ReactNode;
	title?: string;
	iserror?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
