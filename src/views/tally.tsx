import Layout from "../components/layout";
import React, {useState} from "react";
import styled from "styled-components";
import PadSection from "./tally/PadSection";
import NotesSection from "./tally/NoteSection";
import CateSection from "./tally/CateSection";
import TagsSection from "./tally/TagsSection";
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const CateWrapper = styled.div`
  background: #A3D6CA;
`

type Category = '-' | '+'
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}
function Tally() {
    const [selected, setSelected] = useState(defaultFormData)
    const {addRecord} = useRecords()
    const onChange = (obj:Partial<typeof selected>) =>{
        setSelected({...selected,...obj})
    }
    const submit = ()=>{
        if(addRecord(selected)){
            alert('保存成功')
            setSelected(defaultFormData)
        }else{
            setSelected(defaultFormData)
        }

    }
    return (
        <MyLayout>
            <TagsSection  value ={selected.tagIds}
                          onChange = {tagIds => onChange({tagIds})}/>
            <NotesSection  value ={selected.note}
                           onChange = {note => onChange({note})}/>
            <CateWrapper>
                <CateSection   value ={selected.category}
                               onChange = {category => onChange({category})}/>
            </CateWrapper>
            <PadSection    value ={selected.amount}
                           onChange = {amount => onChange({amount})}
                           onEnter={submit}/>
        </MyLayout>
    );
}
export default Tally;
