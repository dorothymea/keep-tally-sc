import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../components/Input";
import {useTags} from "../../hooks/useTags";

const Wrapper = styled.section`
  font-size:14px;
  > label{
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
    inset 0  5px 5px -5px rgba(0,0,0,0.25);
    padding: 0 16px;
  }
`
const Add = styled.div`
  padding: 2px 16px;
  background: #FFF;
  > button{
    background:none; border: none; padding: 0 4px;
    color: #666;margin: 4px 0;
    border-bottom: 1px solid #666;
  }
`
type Props = {
    value:string;
    onChange: (value:string) => void
}
const NoteSection:React.FC<Props> = (props) => {
    const note = props.value
    const {addTag} = useTags()
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) =>{
        props.onChange(e.target.value)
    }
    return(
        <Wrapper>
            <Add>
                <button onClick={addTag}>新建标签</button>
            </Add>
            <Input label="备注" type="text" value={note} onChange={onChange}
                   placeholder="点击此处添加备注" />
        </Wrapper>
    )
}

export default NoteSection