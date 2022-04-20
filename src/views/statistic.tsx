import Layout from "../components/layout";
import React, {useState} from "react";
import CateSection from "./tally/CateSection";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from "dayjs";
import styled from "styled-components";
import {Center} from "../components/Center";
import {Space} from "../components/Space";
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 12px 16px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  >.note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`
const Header = styled.h3`
  font-size:18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistic() {
    const [category,setCategory] = useState<'-'|'+'>('-')
    const {records} = useRecords()
    const {getName} = useTags()
    const hash:{[K:string]:RecordItem[]} = {}
    const selectedRecords = records.filter(r => r.category === category)

    selectedRecords.forEach(r =>{
        const key = day(r.createAt).format('MM-DD')
        if(!(key in hash)){
            hash[key] = []
        }
        hash[key].push(r)
    })
    let flag = records.length !== 0
    const array = Object.entries(hash).sort( (a,b) =>{
        if(a[0] === b[0]) return 0
        if(a[0] > b[0]) return -1
        if(a[0] < b[0]) return 1
        return 0
        })
    const dataContent = array.map(([date,records])=>
            <div >
                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r =>{
                        return(
                            <Item>
                                <div className="tags oneLine">
                                    {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
                                </div>
                                {r.note && <div className="note">
                                    {r.note}
                                </div>}
                                <div className="amount">￥{r.amount}</div>
                            </Item>)
                    })}
                </div>
            </div>
        )

    return (
        <Layout>
            <CateSection value={category} onChange={setCategory}/>
            <div>
                {flag ? dataContent : (<div><Space/> <Center>当前没有记录，记一笔吧！</Center></div>)}
            </div>
        </Layout>
    );
}

export default Statistic;