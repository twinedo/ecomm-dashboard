import styled from "styled-components";

export const ContainerAuth = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    min-height: 100vh;
    
`

export const ContainerHalf = styled.div<{$isForm?: boolean, $isVisible?: boolean}>`
    display: ${props => props.$isVisible ? "flex" : "none"};
    justify-center: center;
    height: 100vh;
    width: 50%;
    background: ${props => props.$isForm ? "#FFFFFF" : "#ACD1AF"}

    @media (max-width: 768px) {
        width: 100%;
        display: ${props => props.$isForm && props.$isVisible ? "none" : "flex"}
    }  
`

export const ContainerAuthLeft = styled(ContainerHalf)`
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-self: center;
    padding: 0px 30px;
    background: #ACD1AF;

    @media (max-width: 768px) {
        display: ${props => props.$isVisible ? 'none' : 'flex'};
    }
`
export const TitleLeft = styled.div`
    font-size: 60px;
    color: white;
    font-weight: bold;
    text-align: left;
`

export const ContainerAuthRight = styled(ContainerHalf)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 40px;
    background: #FFFFFF;
    row-gap: 8px;
`

export const TitleRight = styled.div`
    font-size: 40px;
    color: black;
    font-weight: bold;
    text-align: left;
`