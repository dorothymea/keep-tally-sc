import {useEffect, useState} from "react";
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";
import {useHistory} from "react-router-dom";
//use开头，自定义hooks


const useTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>([])
    let history = useHistory()
    useEffect(()=>{
        let localTags = JSON.parse(window.localStorage.getItem('tags')||'[]')
            if(localTags.length === 0){
                localTags = [
                    {id:createId(),name:'衣'},
                    {id:createId(),name:'食'},
                    {id:createId(),name:'住'},
                    {id:createId(),name:'行'}
                ]
            }
        setTags(localTags)
    },[])
   useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
   },[tags])
    const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
    const findTagIndex = (id:number) => {
        let result = -1
        for (let i=0; i<tags.length;i++){
            if(tags[i].id === id){
                result = i
                break
            }
        }
        return result
    }

    const updateTag = (id:number,obj:{name:string})=>{
        const index  = findTagIndex(id)
        const tagClones = JSON.parse(JSON.stringify(tags))
        tagClones.splice(index,1,{id:id,name:obj.name})
        setTags(tagClones)
    }
    const deleteTag = (id:number)=>{
        const index = findTagIndex(id)
        const tagClones = JSON.parse(JSON.stringify(tags))
        tagClones.splice(index,1)
        setTags(tagClones)
        setTimeout(()=>{
            history.push('/tags')
        },0)
    }
    const addTag =()=>{
        const tagName = window.prompt('请输入新标签名称')
        if (tagName!==null && tagName !== '') {
            setTags([...tags,{id:createId(),name:tagName}])
        }
        window.location.reload()
    };
    const getName = (id:number) =>{
        const tag = tags.filter(t=> t.id === id)[0]
        return tag ? tag.name : ''
    }
    return {tags,getName,addTag,setTags,findTag,updateTag,findTagIndex,deleteTag}
}

export {useTags}
