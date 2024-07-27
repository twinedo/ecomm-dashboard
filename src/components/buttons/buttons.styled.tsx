'use client'

import styled from "styled-components";

export const PrimaryButton = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#0096FF" : "white"};
  color: ${props => props.$primary ? "white" : "#0096FF"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  min-height: 30px;
  min-width: 120px;
`;

export const ButtonsContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 300px;
    min-height: 30px;
    border-radius: 8px;
    background: #0096FF;
    border: none;
    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`

export const Prefix = styled.div`
    padding: 8px;
`

export const Postfix = styled.div`
    padding: 8px;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: white;
`

export const ButtonsContent = styled.div`
    border: none;
    outline: none;
    display: flex;
    flex: 1;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    justify-content: center
`