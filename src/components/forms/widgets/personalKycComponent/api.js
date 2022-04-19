// import { mainService } from "../../../../services/MainService";
import { 
  formatMaskDate, 
  parseDateToTimeStamp ,
  // parseTimeStampToDate
} from './utils'

const countryValidators = {
    res:{
        levels:{
            level_1:{
                personal:{
                    natural:{
                        name:{
                            ui_name: "Nombres completos"
                        },
                        phone:{
                            ui_name: "Numero de teléfono",
                            ui_type: "phone"
                        },
                        nationality:{
                            colombia:{
                                ui_name: "Colombia"
                            },
                            afghanistan:{
                                ui_name: "Afghanistan"
                            },
                            ui_name: "Nacionalidad del documento",
                            ui_type: "select"
                        },
                        address:{
                          ui_name:"Dirección de residencia"
                        }
                }
            }
        }
    }
  }
}


const STAGES = {
      "address":{
        // uiName:"Dirección de residencia:",
        key:"address",
        uiType:"text",
        "settings":{
          defaultMessage:"Escribe de forma completa tu dirección actual de residencia",
          successPattern:/[a-zA-Z ]{3,40}/g,
          // label:"Dirección de residencia:",
          placeholder:"Escribe la dirección",
          queryParams:{
            form:'personal_address'
          },
          errors:[
            { pattern:/[^a-zA-Z ]{1,30}/g, message:'Solo se permiten letras...'}
          ],
          auxComponent:"personalKycComponent/addressInput"
        }
      },
      "name":{
        // uiName:"Nombres completos",
        key:"name",
        uiType:"text",
        "settings":{
          defaultMessage:"Los nombres deben coincidir con los de tu documento de identidad",
          successPattern:/[a-zA-Z\u00f1\u00d1 ]{3,40}/g,
          label:"Nombres completos (Sin apellidos):",
          placeholder:"Ej: Juan josé ",
          queryParams:{
            form:'personal_names'
          },
          errors:[
            { pattern:/[^a-zA-Z\u00f1\u00d1 ]{1,30}/g, message:'Solo se permiten letras...'}
          ],
          AuxComponent:null,
          MainComponent:null
        }
      },
      "nationality":{
        // uiName:"Nacionalidad del documento:",
        key:"nationality",
        uiType:"select",
        "settings":{
          defaultMessage:"Selecciona la nacionalidad de tu documento de identidad",
          successPattern:/[a-zA-Z _]{1,40}/g,
          errors:[
            { pattern:/[^a-zA-Z _]{1,30}/g, message:'Solo se permiten letras...'}
          ],
          // label:"Nacionalidad del documento:",
          placeholder:"Ej: pasaporte",
          queryParams:{
            form:'personal_country'
          }
        }
      },
      "phone":{
        uiName:"Número de teléfono",
        key:"phone",
        uiType:"phone",
        "settings":{
          defaultMessage:"Digíta tu número de celular",
          successPattern:/[0-9]{5,40}/g,
          // label:"Número de celular:",
          queryParams:{
            form:'personal_phone'
          },
          errors:[
            { pattern:/[^0-9]/g, message:'Solo se permiten Números...'}
          ],
          auxComponent:"personalKycComponent/countryPrefix", //targetId to render component
          mainComponent:null
        }
      }
}

export const ApiGetPersonalStages = async(config) => {
    const { personType, level, formName } = config
    // let countryValidators = await mainService.countryValidators()
    if(!countryValidators) return;
    return countryValidators?.res?.levels[level][formName][personType]
}



 
export const ApiPostPersonalKyc = async(body, tools) => {

  const { setLoading, prevStage, toastMessage } = tools

  let config = {
    info: { ...body },
    info_type: "personal",
    verification_level: "level_1",
  };

  const isMaskBirthday = config.info.birthday.includes('/') 
  if(isMaskBirthday){
    config.info.birthday = formatMaskDate(config.info.birthday) 
  }

  const timeStampDate = parseDateToTimeStamp(config.info.birthday)
  config.info.birthday = timeStampDate
  // https://es.stackoverflow.com/questions/219147/new-date-en-javascript-me-resta-un-dia/219165
  setLoading(true)
  // let res = await mainService.updateLevelProfile(config);
  let res
  setLoading(false)
  
  if(!res) {
    toastMessage('No ha sido posible completar la verificación.', 'error')
    return prevStage();
  }
}


// typeof date.getMonth === 'function'

export const PERSONAL_DEFAULT_STATE = {
  personal:{ 
    meta_phone: "colombia",
    //address: "cra 45 - 88",
    // birthday: parseTimeStampToDate("722059200"),
    // birthday: "18/11/2002",
    // city: "cali",
    // country: "colombia", 
    // id_number: "1116256754",
    // id_type: "cedula_ciudadania",
    // name: "Andres felipe",
    // nationality: "colombia",
    // phone: "57 3145698999",
    // surname: "Garcia garcia"
  }
}


// const handleError = {
//   identity:{},
//   financial:{},
//   personal:{
//     defaultErrorMessage:"Tu verificación ha sido rechazada, corríge los campos indicados.",
//     // errors:{
//     //   country:"Ingresa un país de operación válido...",
//     //   name:"Solo ingresa nombres sin apellidos..."
//     // }
//   }
// }
  
export const PERSONAL_COMPONENTS = {
    wrapperComponent:{
        personal:'personalKycComponent'
    }
}

export const PERSONAL_STAGES = {
    personal:STAGES
}

  
  