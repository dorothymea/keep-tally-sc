import styled from "styled-components";
import Nav from "./Nav";
import React from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const  Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar{
    display:none;
  }
  
`

const Layout = (props:any)=> {
    return (
        <Wrapper >
            <Main className={props.className}>
                {props.children}
            </Main>
            <Nav />
    </Wrapper>
    )
}

export default Layout