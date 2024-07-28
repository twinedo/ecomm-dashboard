import React, { useState } from 'react'
import { TableBodyContainer, TableContainer, TableHead, TableItemBody, TableItemHead, TableItemHeadText, TableRow, TableRowBody, TableRowHead } from './tables.styled'
import { BiSortAlt2 } from 'react-icons/bi'
import { Spacer } from '../spacer';
import { THeaderTable, TTables } from './tables.type';
import { TUser } from '@/services/auth/auth.type';
import lodash from 'lodash';

export type DataItem = {
    actions?: any;
} & TUser;

const Tables = (props: TTables) => {
    const { header, data } = props;
    const [sortBy, setSortBy] = useState<{
        column: keyof DataItem | null;
        direction: 'asc' | 'desc';
    }>({
        column: null,
        direction: 'asc',
    });

    const [newData, setNewData] = useState(data);

    const handleSort = (column: keyof DataItem) => {
        if (column === 'actions') {
            return; // Ignore sorting for the "Actions" column
        }

        const sorted = lodash.orderBy(data, [column], [sortBy.column === column && sortBy.direction === 'asc' ? 'desc' : 'asc'])

        console.log('sorted', sorted);


        setSortBy((prev) => ({
            column,
            direction:
                prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
        setNewData(sorted);

        // const sortedData = [...data].sort((a, b) => {
        // 	if (sortBy.direction === 'asc') {
        // 		return a[sortBy.column!] > b[sortBy.column!] ? 1 : -1;
        // 	} else {
        // 		return a[sortBy.column!] < b[sortBy.column!] ? 1 : -1;
        // 	}
        // });
        // setNewData(sortedData);
    };

    return (
        <TableContainer>
            <TableHead>
                <TableRow>
                    {header.map(o => (
                        <TableRowHead>
                            <TableItemHead onClick={() => handleSort(o.column)}>
                                <TableItemHeadText>{o.text}</TableItemHeadText>
                                {sortBy.column === o.column && sortBy.direction === 'asc' ? (
                                    <BiSortAlt2 color='black' />
                                ) : (
                                    <BiSortAlt2 color='#767676' />
                                )}
                            </TableItemHead>

                        </TableRowHead>
                    ))}
                </TableRow>
            </TableHead>
            <Spacer $height={10} />
            <TableBodyContainer>
                <TableRow>
                    {newData.map(o => (
                        <TableRowBody>
                            <TableItemHead>

                    <TableItemBody>{o.value}</TableItemBody>
                            </TableItemHead>

                        </TableRowBody>
                ))}
                </TableRow>
            </TableBodyContainer>
        </TableContainer>
    )
}

export default Tables