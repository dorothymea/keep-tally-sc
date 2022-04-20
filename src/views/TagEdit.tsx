import React from "react";
import {useTags} from "../hooks/useTags";
import {useParams,useHistory} from "react-router-dom";
import Layout from "../components/layout";
import Icon from "../components/icon";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import styled from "styled-components";
import {Center} from "../components/Center";
import {Space} from "../components/Space";

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
  font-size: 16px;
`
const Topper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`

type Params = {
    id:string
}
const TagEdit: React.FC = ()=>{
    const {findTag,updateTag,deleteTag}= useTags()
    let {id:idString} = useParams<Params>()
    const tag = findTag(parseInt(idString))
    const tagContent = (tag:{id:number;name:string})=>(
        <div>
            <InputWrapper>
                <Input label='标签名' type="text" placeholder="标签名" value={tag.name}
                       onChange={(e)=>{
                           updateTag(tag.id,{name:e.target.value})
                       }}
                />
            </InputWrapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={()=>deleteTag(tag.id)}>
                    删除标签
                </Button>
                <Space/>
            </Center>
        </div>
        )
    const history = useHistory()
    const onClickBack = () => {
      history.goBack()
    }
    return (
        <Layout>
            <Topper>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </Topper>
            {tag ? tagContent(tag) : <Center>tag不存在</Center>}
        </Layout>
    )
}

export {TagEdit}