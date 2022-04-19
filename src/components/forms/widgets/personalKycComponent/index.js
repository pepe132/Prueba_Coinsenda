import React, { useState, useEffect } from 'react'
import validations from './validations'
import Layout from '../layout'
import useStage from '../../hooks/useStage'
import loadable from '@loadable/component'
import InputComponent from './input'
import { getBody } from './utils'
import { BackButtom, NextButtom } from './buttons'
import LabelComponent from './labelComponent'
import KycSkeleton from './skeleton'
import { ApiPostPersonalKyc } from './api'
import SuccessComponent from './success'

import {
  MainContainer,
  StickyGroup,
  TitleContainer,
} from './styles.js'


const DynamicLoadComponent = loadable(() => import('../../dynamicLoadComponent'))

const PersonalKycComponent = ({ handleDataForm, handleState, closeModal, actions }) => {

  const { dataForm } = handleDataForm
  const { state, setState } = handleState
  const [ loading, setLoading ] = useState(false)
  const stageManager = useStage(
    // create the form stages
    Object.keys(dataForm?.handleError?.errors || dataForm.stages),
    dataForm.stages
  )

  const {
    prevStage,
    nextStage,
    currentStage,
    stageController,
    finalStage,
    stageData,
    setStageData,
    stageStatus,
    setStageStatus
  } = stageManager


  const nextStep = () => {
    if(stageStatus !== 'success'){return}
    nextStage()
    setStageStatus(null)
    document.querySelector(`[name="${stageData?.key}"]`).value = ""
    document.querySelector(".label_text__" + stageData?.key).style.color = 'gray'
  }

  const onChange = (e) => {
    e.target.preventDefault && e.target.preventDefault();
    // if(!validations[stageData.key]) return;
    const [ _value, _status ] = validations[stageData.key](e?.target?.value, {...stageData, state, dataForm});
    e.target.value = _value
    //// applies to update state through an effect when it comes from a default state
    setState(prevState => {
      return { ...prevState, [stageData?.key]: _value }
    })
    setStageStatus(_status)
  }

  // load state  by default
  useEffect(() => {
    let inputElement = document.querySelector(`[name="${stageData?.key}"]`)
    // except metada because is not include on state
    if(inputElement && state[stageData.key]){
      // if(!stageData?.key?.includes('meta') && inputElement && state[stageData.key]){
      onChange({target:{value:state[stageData.key]}});
      inputElement.value = state[stageData.key]
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state[stageData?.key]])

  


  useEffect(() => {
    if(currentStage >= stageController.length){
      const execPost = async() => {
        let res = await ApiPostPersonalKyc(getBody(state, dataForm), { setLoading, prevStage })
        if(!res) return;
      }
      execPost()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStage])


  if(loading){return <KycSkeleton/>}

  if(!loading && finalStage){
    // Render success Stage
    return (
      <SuccessComponent />
    )
  }


  return(
      <Layout background="white" >
        { 
          dataForm?.handleError?.errors &&
          <DynamicLoadComponent
            component="infoPanel"
            title="Campos completados"
            state={state}
            stageData={stageData}
            dataForm={dataForm}
          />
        }

        <MainContainer>
          <TitleContainer id="titleContainer__">
            <h1 className="titleContainer__h1 fuente">Verificación inicial</h1>
          </TitleContainer>
          <StickyGroup background="white" id="stickyGroup__" >
            <LabelComponent 
              stageController={stageController}
              stages={dataForm?.stages}
              currentStage={currentStage}
              >
              <BackButtom onClick={prevStage} disabled={currentStage <= 0}/>
            </LabelComponent>
            <InputComponent
              onChange={onChange} 
              inputStatus={stageStatus}
              defaultValue={state[stageData?.key]}
              name={stageData?.key} 
              message={stageData?.settings?.defaultMessage}
              placeholder={stageData?.settings?.placeholder}
              type={stageData?.uiType}
              setStageData={setStageData}
              dataForm={dataForm}
              state={state}
              progressBar={{start:currentStage+1, end:stageController.length, showSteps:true}}
              AuxComponent={[
                stageData?.settings?.auxComponent, 
                () => <NextButtom onClick={nextStep} disabled={(currentStage >= stageController.length) || stageStatus !== 'success'} />
              ]}
            />
          </StickyGroup>

          <DynamicLoadComponent
            component="personalKycComponent/selectList"
            list={stageData?.selectList}
            name={stageData?.key}
            state={state}
            handleAction={onChange}
            // pass useCallBack to inherited functions to this component
          />

        </MainContainer>
      </Layout>
  )
}

export default PersonalKycComponent


