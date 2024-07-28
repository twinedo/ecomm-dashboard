'use client'

import Sidebars from '@/components/sidebars'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CardsUsersContainer, ContainerUsers, SearchContainer, Title } from './users.styled'
import { Spacer } from '@/components/spacer'
import { RowAlignCenter, RowJustBetween } from '@/components/containers'
import Tables from '@/components/tables'

const Users = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const [headerTable] = useState(
    [
      {
        id: '1',
        column: 'fullname',
        text: 'Fullname'
      },
      {
        id: '2',
        column: 'phone',
        text: 'Phone Number'
      },
      {
        id: '3',
        column: 'role',
        text: 'Role'
      },
    ]
  )

  const [bodyTable] = useState(
    [
      {
        id: '1',
        column: 'fullname',
        value: 'Twin Edo'
      },
      {
        id: '2',
        column: 'phone',
        value: '081231429412'
      },
      {
        id: '3',
        column: 'role',
        value: 'admin'
      },
    ]
  )

  return (
    <Sidebars>
      <ContainerUsers>
        <Title>
          Users
        </Title>
        <Spacer $height={10} />
        <RowJustBetween>
          <RowAlignCenter>
            <SearchContainer
              prefix={
                <div>
                  <AiOutlineSearch size={24} />
                </div>
              }
              placeholder='Search by full name, email or contact number'
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
          </RowAlignCenter>

        </RowJustBetween>
        <Spacer $height={30} />
        <CardsUsersContainer>
          <Tables header={headerTable} data={bodyTable} />
        </CardsUsersContainer>
      </ContainerUsers>
    </Sidebars>
  )
}

export default Users