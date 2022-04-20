import React, {useState} from "react";
import {Wrapper} from "./PadSection/PadWrapper";
import {calculateOutput} from "./PadSection/calculateOutput";

type Props = {
    value:number;
    onChange:(value:number) => void;
    onEnter?: ()=> void;
}
const PadSection:React.FC<Props> = (props)=>{
    // const output = props.value.toString()
    const [output,_setOutput] = useState(props.value.toString())
    const setOutput = (output:string) =>{
        let newOutput:string;
        if(output.length > 16){
            newOutput = output.slice(0,16)
        }else if(output.length === 0){
            newOutput = '0'
        }else{
            newOutput = output
        }
        _setOutput(newOutput)
        props.onChange(parseFloat(newOutput))

    }
    const onClickButtonWrapper = (e:React.MouseEvent) =>{
        const text = (e.target as HTMLInputElement).textContent;
        if(text === null) {return;}
        if(text === 'Enter'){
            if(props.onEnter){
                props.onEnter()
                _setOutput('0')
            }
            return;
        }
        if('0123456789.'.split('').concat(['Delete','AC']).indexOf(text)>=0){
            setOutput(calculateOutput(text,output))
        }
    }
    return(
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad" onClick={onClickButtonWrapper} >
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="func">Delete</button>
                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="func">AC</button>
                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>
                <button className="func enter">Enter</button>
                <button className="number zero">0</button>
                <button className="number dot">.</button>
            </div>
        </Wrapper>
    )
}
export default PadSection;
