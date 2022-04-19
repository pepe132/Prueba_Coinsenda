import React, { useState, useEffect } from 'react'
import FormComponent from '../../' 
import { initStages } from '../../utils'
import KycSkeleton from './skeleton.js'
import Layout from '../layout'
  
const PersonalKyc = () => {

  const [ dataForm, setDataForm ] = useState()

  const init = async() => {
    const _dataForm = await initStages({
      personType:'natural',
      level:'level_1',
      formName:'personal',
    })
    setDataForm(_dataForm)
  }

  useEffect(()=> { 
    init()
  }, [])

  return(
    <Layout>
     
        {
          dataForm ?
            <FormComponent 
              handleDataForm={{dataForm, setDataForm}}
              Fallback={KycSkeleton}  
            />
            :
            <KycSkeleton/>
        }
    </Layout>
  )

}


export default PersonalKyc