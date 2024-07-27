import { ReactNode } from 'react';

export type TModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	isIconClose?: boolean;
	containerClassName?: string;
};
