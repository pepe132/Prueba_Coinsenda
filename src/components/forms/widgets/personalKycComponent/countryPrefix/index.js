/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// import InputComponent from '../personalKycComponent/input'
import { IoIosArrowDown } from 'react-icons/io'

import {
    PrefixContainer
} from './styles'

import {
    setMetaPhoneData,
    colapseContainer,
    extendContainer,
    inputFocus,
    setParentConfig,
    removeParentConfig
} from './methods'

 
const CountryPrefix = ({ dataForm, setStageData, name, state, ...props }) => {

    const [ activeStage, setActiveStage ] = useState(false)
    // assign it to input only if it is metadata
    const inputName = name.includes('meta') ? name : `meta_${name}`
    const [ countryData, setCountryData ] = useState(dataForm?.stages?.country?.selectList[state[inputName]])
    
    const toggleActivation = e => {
        e.stopPropagation()
        if(e.target?.dataset?.action){
          setActiveStage(prevState => !prevState)
        }
    }

    useEffect(() => {
        setParentConfig()
        const listenerElement = document.querySelector('.prefixContainer_')
        listenerElement.addEventListener("click", toggleActivation)
        return () => {
            listenerElement.removeEventListener("click", toggleActivation)
            removeParentConfig()
        }
    }, [])

    useEffect(()=>{
        if(activeStage){
            setMetaPhoneData(setStageData, dataForm)
            extendContainer()
            inputFocus(inputName, 500)
        }
        else{
            setStageData({...dataForm?.stages?.phone})
            colapseContainer()
        }
    }, [activeStage])

    useEffect(()=>{
        const _countryData = dataForm?.stages?.country?.selectList[state[inputName]] 
        setCountryData(_countryData)
        if(_countryData){
            setActiveStage(false)
        }
    }, [state[inputName]])

    const prefix = countryData?.prefix || "+ --";

    // console.log('|||||||||||||||||||||||||  countryData ==> ', dataForm?.stages?.country)

    return(
        <PrefixContainer 
            activeStage={activeStage}  
            className="prefixContainer_" 
            img={countryData?.flag || ''}
        >
                <div data-action className="prefix_flag_"></div>
                <p data-action className="prefixContainer__prefix_text">{prefix}</p>
                <div className="prefixInputContainer inputNumberFont">
                    <input 
                        name={inputName}
                        onChange={props.onChange} 
                        defaultValue={countryData?.uiName}/>
                </div>
                <IoIosArrowDown size={20} data-action/>
        </PrefixContainer>
    )
}

export default React.memo(CountryPrefix)



