import styled from "styled-components";

export const TableContainer = styled.table`
    table-layout: fixed;
    width: 100%;

`

export const TableHead = styled.thead`
  background-color: #f9fafb; /* Equivalent to bg-neutral-50 */
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
`;

export const TableRow = styled.tr`
    
`

export const TableRowHead = styled.th`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
`

export const TableItemHead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const TableItemHeadText = styled.div`
    color: #737373; 
    font-size: 1rem;
    font-weight: 400; 
    line-height: 1.25; 
`

export const TableBodyContainer = styled.div`
    
`

export const TableRowBody = styled(TableRowHead)`
    
`

export const TableItemBody = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    
`