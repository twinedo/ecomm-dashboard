'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { ERole, signIn, signUp } from "@/services/auth";
import { Cards } from "@/components/cards";
import { ContainerAuth, ContainerAuthLeft, ContainerHalf, TitleLeft } from "./page.styled";

export default function Home() {


  const onSignUp = () => {
    signUp('manager@ecomm.com', 'password123', {
      fullName: 'Manager Field',
      email: 'manager@ecomm.com',
      username: 'manager123',
      phone: '081234681282',
      role: ERole.MANAGER
    })
  }

  const onSignIn = () => {
    signIn('manager@ecomm.com', 'adawf')
  }

  return (
    <ContainerAuth>
      <ContainerHalf $isForm={false}>
        <ContainerAuthLeft onClick={onSignUp}>
          <TitleLeft>E-COMMERCE</TitleLeft>
          <TitleLeft>DASHBOARD</TitleLeft>
          <TitleLeft>MANAGEMENT SYSTEM</TitleLeft>
        </ContainerAuthLeft>
      </ContainerHalf>
      <ContainerHalf $isForm={true}>
        <div>Login here</div>
      </ContainerHalf>
    </ContainerAuth>
  );
}
