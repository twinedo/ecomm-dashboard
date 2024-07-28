import { Cards } from "@/components/cards";
import { Container } from "@/components/containers";
import { Inputs } from "@/components/inputs";
import styled from "styled-components";

export const ContainerUsers = styled(Container)`
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Title = styled.div`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 30px;
`;

export const SearchContainer = styled(Inputs)`
  width: 500px;
  background-color: white;
`;

export const CardsUsersContainer = styled(Cards)`
    display: flex;
    flex: 1;   
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`