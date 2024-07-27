import React, { memo, useState } from 'react';
import {
	InputsContainer,
	InputsContent,
	InputTitle,
	Postfix,
	Prefix,
} from './inputs.styled';
import { Column } from '../column';
import { TInputs } from './inputs.type';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

export const Inputs = memo((props: TInputs) => {
	const { prefix, postfix, title, iserror = false } = props;
	return (
		<Column>
			{title && <InputTitle>{title}</InputTitle>}
			<InputsContainer $error={iserror}>
				{prefix && <Prefix>{prefix}</Prefix>}
				<InputsContent {...props} />
				{postfix && <Postfix>{postfix}</Postfix>}
			</InputsContainer>
		</Column>
	);
});
Inputs.displayName = 'Inputs';

export const InputPassword = memo((props: TInputs) => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	return (
		<Inputs
			{...props}
			type={isShowPassword ? 'text' : 'password'}
			postfix={
				<div
					style={{ cursor: 'pointer' }}
					onClick={() => setIsShowPassword(!isShowPassword)}>
					{!isShowPassword ? (
						<IoMdEye color='black' />
					) : (
						<IoMdEyeOff color='black' />
					)}
				</div>
			}
		/>
	);
});

InputPassword.displayName = 'InputPassword';
