import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
`

export const RowJustBetween = styled(Row)`
    justify-content: space-between;
    align-items: center;
`

export const RowAlignCenter = styled(Row)`
    align-items: center;
`