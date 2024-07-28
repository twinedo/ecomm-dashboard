import styled from "styled-components";

export const ToolbarContainer = styled.div`
    width: 100%;
    height: 88px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: white;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
`

export const ToolbarTitle = styled.div`
    font-size: 1.25rem; /* 20px */
    font-weight: bold;
`

export const ToolbarOptionContainer = styled.div`
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
    gap: 0.875rem; /* 14px */
`

export const ToolbarOptionLeft = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 15.5px;
  padding-bottom: 16.5px;
  background-color: #ffffff;
  border-radius: 1rem;
  /* border: 1px solid #f4f4f5; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ToolbarOptionLeftInside = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  padding-left: 3.28px;
  padding-right: 2.93px;
  padding-top: 2.28px;
  padding-bottom: 2.5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ImageToolbar = styled.img`
  width: 3.5rem; /* 14 * 0.25rem */
  height: 3.5rem;
  position: relative;
  border-radius: 1rem; /* 2xl border radius */
`;