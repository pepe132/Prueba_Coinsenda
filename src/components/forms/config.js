import { 
  PERSONAL_COMPONENTS,
  PERSONAL_STAGES,
  PERSONAL_DEFAULT_STATE
} from './widgets/personalKycComponent/api'

let stages = {
  ...PERSONAL_STAGES,
} 

const defaultState = {
  ...PERSONAL_DEFAULT_STATE,
}

const handleError = {
  // personal:{
  //   defaultErrorMessage:"Hubo un error en la toma de datos...",
  //   errors:{
  //     name:""
  //   }
  // }
}

const wrapperComponent = {
  ...PERSONAL_COMPONENTS['wrapperComponent'],
}

const formStructure = formName => {
  return {
    wrapperComponent:wrapperComponent[formName],
    handleError:handleError[formName],
    successStage:null,
    defaultState:defaultState[formName],
    stages:stages[formName]
  }
}

export default formStructure
