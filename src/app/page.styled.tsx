import styled from "styled-components";

export const ContainerAuth = styled.div<{}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    min-height: 100vh;
`

export const ContainerHalf = styled.div<{$isForm?: boolean}>`
    display: flex;
    justify-center: center;
    height: 100vh;
    width: 50%;
    background: ${props => props.$isForm ? "#FFFFFF" : "#ACD1AF"}
`

export const ContainerAuthLeft = styled(ContainerHalf)`
    display: flex;
    flex-direction: column;
    justify-center: center;
    width: 100%;
    height: 200px;
    align-self: center;
    padding: 0px 30px;
`
export const TitleLeft = styled.div`
    font-size: 60px;
    color: white;
    font-weight: bold;
    text-align: left;
`