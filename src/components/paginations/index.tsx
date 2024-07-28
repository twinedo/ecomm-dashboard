import React, { memo } from 'react';
import { Button, Container } from './paginations.styled';
import { PaginationProps } from './paginations.type';

const Paginations = (props: PaginationProps) => {
	const {
		currentPage,
		totalPages,
		onPageChange,
	} = props;

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			onPageChange(page);
		}
	};

	return (
		<Container>
			<Button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}>
				{'<'}
			</Button>
			{Array.from({ length: totalPages }, (_, index) => index + 1).map(
				(page) => (
					<Button
						key={page}
						onClick={() => handlePageChange(page)}
						isCurrent={page === currentPage}>
						{page}
					</Button>
				)
			)}
			<Button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}>
				{'>'}
			</Button>
		</Container>
	);
};

export default memo(Paginations);
