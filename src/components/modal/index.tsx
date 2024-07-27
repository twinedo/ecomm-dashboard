// components/Modal.tsx
import { ReactNode } from 'react';
import styled from 'styled-components';
import {
	Overlay,
	Background,
	ModalContainer,
	ModalContent,
	CloseButton,
	PaddingRem,
} from './modal.styled';
import { TModalProps } from './modal.type';

const Modal: React.FC<TModalProps> = ({
	isOpen,
	onClose,
	isIconClose = false,
	children,
	containerClassName,
}) => {
	if (!isOpen) return null;

	return (
		<Overlay>
			<Background onClick={onClose} />
			<ModalContainer containerClassName={containerClassName}>
				<ModalContent>
					{isIconClose && <CloseButton onClick={onClose}>&times;</CloseButton>}
					<PaddingRem>{children}</PaddingRem>
				</ModalContent>
			</ModalContainer>
		</Overlay>
	);
};

export default Modal;
