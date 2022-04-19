import { 
  INFO_URL_API  
} from './const'

import formStructure from './config.js'
// import { ApiGetOnBoardingStages } from './widgets/onBoardingComponent/api'
import { ApiGetPersonalStages } from './widgets/personalKycComponent/api'
// import { ApiGetBiometricStages } from './widgets/biometricKycComponent/api'
// import { ApiGetOnFiatDepositStages } from './widgets/fiatDeposit/api'
// import { ApiGetNewWalletStages } from './widgets/newWallet/api'


// import countryValidators from './apiRes'


export const getQuery = (queryParams) => {
  let result = Object.entries(queryParams).map((param, index) => {
    let concat = `${index < 1 ? '?' : '&'}`
    let query = `${concat}${param[0]}=${param[1]}`
    return query
  })
  return result.join('')
}


export const getInitialState = (payload) => {
  let initialState = {}
  const iterableSource = { ...payload.stages, ...payload?.defaultState }
  // eslint-disable-next-line array-callback-return
  Object.keys(iterableSource).map(stageKey => {
  initialState[stageKey] = payload?.defaultState ? payload?.defaultState[stageKey] : ""
    if(payload?.handleError?.errors && payload?.handleError?.errors[stageKey]){
      return initialState[stageKey] = ""
    }
  })
  return initialState
}


export const setMessageError = (selector, message) => {
  const labelElement = document.querySelector(selector)
  if(!labelElement){return false}
  labelElement.innerHTML = message
  labelElement.style.color = 'red'
}

// manage tags system events




export const onSubmit = async(callback, TimeOut = 100) => {
  callback(true)
  setTimeout(() => { 
    callback(false)
  }, TimeOut);
}



const generateSelectList = (objectList) => {
  let selectList = {...objectList}
  delete selectList.ui_name
  delete selectList.ui_type
  // eslint-disable-next-line array-callback-return
  Object.keys(selectList).map(key => {
    selectList[key].uiName = selectList[key]?.ui_name || selectList[key]?.name
    selectList[key].value = key
    delete selectList[key]?.ui_name
    delete selectList[key]?.name
    delete selectList[key]?.id
    delete selectList[key]?.code
  })
  return selectList
}

const createStage = (source, modelated, index) => {
  
  let _source = {...source}
  let stage = {}

  _source.uiName = _source.ui_name
  _source.uiType = _source.ui_type
  delete _source.ui_name
  delete _source.ui_type
  
  Object.keys(_source).map(async key => {
    // TODO: refactor to for -- in
    // if(key.match("uiName") || key.match("uiType")){
      stage = {
        key:index,
        ...stage,
        ...modelated,
        [key]:_source[key]
      }
    // }
    if(stage[key] === 'select'){
      let selectSource = source
      if(['nationality', 'country'].includes(stage.key)){
        selectSource = await getNationalityList(selectSource)
      }

      stage.selectList = generateSelectList(selectSource)
    }
  })
  
  return stage
}


const getNationalityList = async(selectList) => {
  // TODO : fix compatibility of country lists 
  const response = await fetch(`${INFO_URL_API}/api/countrys`);
  const res  = await response.json()
  if(!res){return}
  
  let countrySource = {}
  let _selectList = JSON.parse(JSON.stringify(selectList))
  delete _selectList?.ui_name
  delete _selectList?.ui_type  

  for (const country of res) {
    country.code = country.code.split(" ").join("_")
    country.currencySymbol = country.currency_symbol
    delete country.currency_symbol
   
    let countryKey = _selectList[country?.code] && country?.code
    let countryUiName = _selectList[country?.code]?.ui_name

    // 16 country no match
    //  if(!countryKey){
    //    console.log('currenciesNotMatch :', country?.code)
    //  }

    if(countryKey){
      countrySource = {
        ...countrySource,
        [countryKey]:{
          ...country,
          name:countryUiName,
          flag:`${INFO_URL_API}${country.flag}` 
        }
      }
      delete _selectList[country?.code]
    } 
  }
  return {...countrySource, ..._selectList}
}

 
const dataService = {
  personal:ApiGetPersonalStages,
}


export const initStages = async(config) => {

  const apiStages = await dataService[config.formName](config)
  if(!apiStages) return;
  const sourceStages = Object.keys(apiStages)
  
  let stages = {} 

  for (const stage of sourceStages) { 
    stages = {
      ...stages,
      [stage]:createStage(apiStages[stage], formStructure(config.formName)?.stages[stage], stage)
    }
  } 

  
  return {
    ...formStructure(config.formName),
    stages
  }
}
