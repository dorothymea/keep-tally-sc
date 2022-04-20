import styled from "styled-components";
import {useTags} from "hooks/useTags";
import React from "react";

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1;
  flex-shrink: 1; overflow: auto;
  display:flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
      background: #A3D6CA;border-radius: 18px;
      display:inline-block; padding: 3px 18px;
      font-size: 14px; margin: 8px 12px;
      &.selected{
        background: #3290B5;
      }
    }
  }

`

type Props = {
    value:number[],
    onChange: (selected:number[]) => void
}

const TagsSection:React.FC<Props> = (props)=>{
    const {tags} = useTags()
    const selectedTagIds = props.value;
    //const [selectedTags,setSelectedTags] = useState<string[]>([])

    const onToggleTag = (tagId:number) =>{
        const index = selectedTagIds.indexOf(tagId)
        if(index >= 0){
            props.onChange(selectedTagIds.filter(t => t!==tagId))
        }else{
            props.onChange([...selectedTagIds,tagId])
        }
    };
    return(
        <Wrapper>
            <ol>
                {
                    tags.map((tag: { id: number ,name:string }) =>
                    <li key={tag.id}
                        onClick={()=>onToggleTag(tag.id)}
                        className={selectedTagIds.indexOf(tag.id)>=0 ? 'selected':''}
                    >{tag.name}</li>)
                }
            </ol>

        </Wrapper>
    )
}

export default TagsSection;