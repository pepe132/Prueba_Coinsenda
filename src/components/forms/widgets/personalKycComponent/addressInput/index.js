import { useState } from "react"
import styled from "styled-components"
import Select from 'react-select'
import { NextButtom } from "../buttons"



const AddressInput = (props) => {

    const [state, setState] = useState({
        input1:'',
        input2:'',
        input3:'',
        input4:'',

    })

    const {input1,input2,input3,input4}=state
    
    
    const onChangeText2=()=>{
        const dos=document.getElementById('input2').value
        setState({
            ...state,
            input2:dos,
        })
    }

    const onChangeText3=(e)=>{
       
        const tres=document.getElementById('input3').value
       
        console.log(e.target.value);
        setState({
            ...state,
            input3:tres,
            
        })
    }

    const onChangeText4=(e)=>{
        
        const cuatro=document.getElementById('input4').value
        console.log(e.target.value);
        setState({
            ...state,
            input4:cuatro
        })
    }

    const options = [
        { value: 'autopista', label: 'AUTOPISTA' },
        { value: 'avenida', label: 'AVENIDA' },
        { value: 'calle', label: 'CALLE' },
        { value: 'carrera', label: 'CARRERA' },
        { value: 'transversal', label: 'TRANSVERSAL' },
        { value: 'bulevar', label: 'BULEVAR' },
        { value: 'carretera', label: 'CARRETERA' },
        { value: 'circunvalar', label: 'CIRCUNVALAR' },
        { value: 'diagonal', label: 'DIAGONAL' },
        { value: 'glorieta', label: 'GLORIETA' },
        { value: 'kilometro', label: 'KILOMETRO' },
        { value: 'cariante', label: 'VIA' }
      
    ]

    const onChangeSelect=({value})=>{
        setState({
            ...state,
            input1:value
        })
    }

    const handleSuccess=()=>{
        const new_obj = { ...props, state:{adress:input1 + ' #' + input2 + '-' + input3 + ' ,' + input4}, inputStatus: 'success' }
        alert('output: ' + new_obj.state.adress)
        console.log(props);
    }
    
    //console.log('InheritProps AddressInput => ', props)

    return(
        <div>

        <AddressInputContainer >
            
            <Select options={options} onChange={onChangeSelect} className='select'/>
            <H1>#</H1>
            <InputMini type='text' style={{width:50,height:45}} id="input2" value={input2} onChange={onChangeText2}/>
            <H1>-</H1>
            <InputMini type='text'style={{width:50,height:45}} id="input3" value={input3} onChange={onChangeText3}/>
            <SegundoInput type='text' placeholder="Apartamento" id="input4" value={input4} onChange={onChangeText4}/>
            
        </AddressInputContainer>
        {
            (input3 || input4) && (<NextButtom  onClick={handleSuccess}/>)
        }
        </div>
    )

}

export default AddressInput

const AddressInputContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:95%;
    height:100%;
    background:white;
    display:flex
`


const InputMini = styled.input`
    padding: 0.5em;
    margin: 0.5em 0.1em;
    color: ${props => props.inputColor || "black"};
    background: #EFF4F7;
   
    border: none;
    border-radius: 3px;
`


const SegundoInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "black"};
    background: #EFF4F7;
    fontSize:10px
    border: none;
    border-radius: 3px;
`

const H1 = styled.h3`
    padding: 0.5em;
    margin: 0.5em 0;
    color: black;
    background: white;
    
    border: none;
`

