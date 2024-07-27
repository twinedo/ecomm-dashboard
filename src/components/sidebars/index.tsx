'use client';

import React, { memo, ReactNode, useEffect, useState } from 'react';
import Toolbar from '../toolbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import {
	RiDashboardLine,
	RiDashboardFill,
	RiGroupLine,
	RiGroupFill,
} from 'react-icons/ri';
import { PiFlagBannerLight, PiFlagBannerFill } from 'react-icons/pi';
import {
	BsMenuButtonWide,
	BsMenuButtonWideFill,
	BsBox2,
	BsBox2Fill,
} from 'react-icons/bs';
import {
	MdOutlineArticle,
	MdArticle,
	MdOutlineDiscount,
	MdDiscount,
} from 'react-icons/md';
import { BiBookContent, BiSolidBookContent } from 'react-icons/bi';
import { FaUser, FaRegUser } from 'react-icons/fa6';
import {
	ContentContainer,
	Indicator,
	LinkContainer,
	MenuContainer,
	MenuItem,
	MenuText,
	Sidebar,
	SidebarContainer,
	ToggleButton,
} from './sidebars.styled';

interface ISidebar {
	children?: ReactNode;
}

const Sidebars = (props: ISidebar) => {
	const { children } = props;
	const pathname = usePathname();

	const [collapsed, setCollapsed] = useState(false);

	const [menuSidebar] = useState([
		{
			id: 1,
			name: 'Dashboard',
			icon: pathname.includes('/dashboard') ? (
				<RiDashboardFill color='#3B82F6' size='24px' />
			) : (
				<RiDashboardLine color='#A3A3A3' size='24px' />
			),
			navigate: '/dashboard',
			isNested: false,
			nested: [],
		},
		{
			id: 12,
			name: 'Users',
			icon: pathname.includes('/users') ? (
				<FaUser color='#3B82F6' size='24px' />
			) : (
				<FaRegUser color='#A3A3A3' size='24px' />
			),
			navigate: '/users',
			isNested: false,
			nested: [],
		},
		{
			id: 3,
			name: 'Categories',
			icon: pathname.includes('/categories') ? (
				<BsMenuButtonWideFill color='#3B82F6' size='24px' />
			) : (
				<BsMenuButtonWide color='#A3A3A3' size='24px' />
			),
			navigate: '/categories',
			isNested: false,
			nested: [],
		},
		{
			id: 4,
			name: 'Products',
			icon: pathname.includes('/products') ? (
				<BsBox2Fill color='#3B82F6' size='24px' />
			) : (
				<BsBox2 color='#A3A3A3' size='24px' />
			),
			navigate: '/products',
			isNested: false,
			nested: [],
		},
	]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		// Clean up the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleResize = () => {
		// Calculate the window width
		const windowWidth = window.innerWidth;

		// Determine whether to collapsZe based on window width
		if (windowWidth <= 768) {
			setCollapsed(true);
		} else {
			setCollapsed(false);
		}
	};

	const toggleSidebar = () => {
		setCollapsed(!collapsed);
	};
	return (
		<SidebarContainer>
			<Sidebar collapsed={collapsed}>
				<ToggleButton onClick={toggleSidebar}>
					<IoMdMenu />
				</ToggleButton>
				<MenuContainer collapsed={collapsed}>
					<MenuItem>
						{menuSidebar.map((o) => (
							<div key={o.id.toString()}>
								<LinkContainer
									href={o.navigate}
									isActive={pathname.includes(o.navigate)}>
									<Indicator isActive={pathname.includes(o.navigate)} />
									<MenuText isActive={pathname.includes(o.navigate)}>
										{o.icon}
										<div>{o.name}</div>
									</MenuText>
								</LinkContainer>
							</div>
						))}
					</MenuItem>
				</MenuContainer>
			</Sidebar>
			<ContentContainer collapsed={collapsed}>
				<Toolbar />
				{children}
			</ContentContainer>
		</SidebarContainer>
	);
};

export default memo(Sidebars);
