import { styled } from 'styled-components';

export const NavCrumb = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: #4a5568;
	column-gap: 8px;
`;

export const NavItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const NavItem = styled.div<{ $index: number; $items: any[] }>`
	color: ${(props) =>
		props.$index === props?.$items?.length - 1 ? '#4a5568' : '#4a5568'};
`;
