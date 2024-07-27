// components/Breadcrumb.tsx

import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import { NavCrumb, NavItem, NavItemContainer } from './breadcrumb.styled';

interface BreadcrumbProps {
	items: { text: string; link: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<NavCrumb>
			{items.map((item, index) => (
				<NavItemContainer key={item.link}>
					<Link href={item.link}>
						<NavItem $index={index} $items={items}>
							{item.text}
						</NavItem>
					</Link>

					{index < items.length - 1 && <BiChevronRight color='blue' />}
				</NavItemContainer>
			))}
		</NavCrumb>
	);
};

export default Breadcrumb;
