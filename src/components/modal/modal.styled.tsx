import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow-x: hidden;
	overflow-y: auto;
	outline: none;
`;

export const Background = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div<{ containerClassName?: string }>`
	position: relative;
	width: auto;
	margin: 1.5rem auto;
	${(props) => props.containerClassName}
`;

export const ModalContent = styled.div`
	position: relative;
	background-color: white;
	border: 2px solid #d1d5db;
	border-radius: 0.5rem;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0.75rem;
	font-size: 1.25rem;
	color: #6b7280;
	&:hover {
		color: #374151;
	}
`;

export const PaddingRem = styled.div`
	padding: 1rem;
`;
