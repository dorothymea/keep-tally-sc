import styled from "styled-components";
import React, {useState} from "react";

const Wrapper= styled.section`
 >ul{
   display: flex;
   align-items: center;
   >li{
     padding:10px 0;
     width: 50%;
     text-align: center;
     font-size: 22px;
     position: relative;
     &.selected::after{
      content:'';
       display: block;
       height: 3px;
       background: #03608c;
       bottom: 0;
       position: absolute;
       width: 100%;
       left: 0;
     }
   }
 }
`

type Props = {
    value:'-' | '+'
    onChange:(value:'-'|'+') => void;
}

const CateSection:React.FC<Props> = (props)=>{
    const cateMap = {'-':'支出','+':'收入'}
    const [cateList] = useState<('+'|'-')[]>(['-','+'])
    // const [cate,setCate] = useState('-')
    const cate = props.value
    return(
        <Wrapper>
            <ul>
                {
                    cateList.map(c =>
                        <li
                            key = {c}
                            className={cate === c ? 'selected':''}
                            onClick={()=>{props.onChange(c)}}>
                            {cateMap[c]}
                        </li>
                    )
                }
            </ul>
        </Wrapper>
    )
}
export default CateSection;