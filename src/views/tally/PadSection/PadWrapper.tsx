import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    text-align: right;
    background: white;
    font-size: 36px;
    line-height: 72px;
    padding-right: 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0  5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad {
    > button{
      border: 1px solid #A3D6CA;
      border-radius: 8px;
      background: white;
      height: 64px;
      float: left;
      font-size: 18px;
      &.number {width: 24%;}
      &.func {width:28%;}
      &.enter{height:128px;float: right;}
      &.zero{width:48%;}
  }
  }
`
export {Wrapper}