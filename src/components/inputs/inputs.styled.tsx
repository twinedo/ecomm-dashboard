import styled from "styled-components";

export const InputsContainer = styled.div<{$error?: boolean}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${props => props.$error ? 'red' : '#E7E7E7'};
    background: #FFFFFF;
    min-width: 300px;
    border-radius: 8px;
    &:hover {
        border: 1px solid #000000;
        border-radius: 8px;
    }
`

export const Prefix = styled.div`
    padding: 8px;
`

export const Postfix = styled.div`
    padding: 8px;
`

export const InputTitle = styled.div`
    font-weight: bold;
    font-size: 14px;
`

export const InputsContent = styled.input`
    border: none;
    outline: none;
    display: flex;
    flex: 1;
    padding: 8px;
    border-radius: 8px;
`