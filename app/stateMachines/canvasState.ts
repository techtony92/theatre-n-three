import type { CanvasState } from "../api/three/types"
export const CanvasDefault:CanvasState = {
    camera:{
        fov:50,
        far:1000,
        near:0.1,
        position:{
            x:0,
            y:0,
            z:5,
        }
    }
}

export function canvasReducer(state:CanvasState, action:{attribute:any, value:any}){
    const {attribute, value} = action;
   
    switch(attribute){
        case "fov":
            state = {
                ...state,
                camera:{
                    ...state.camera,
                    fov:value,
                }
                
            }
        break;
        case 'far': 
            state = {
                ...state,
                camera:{
                    ...state.camera,
                    far:value,
                }
            }
            break;
        case 'near':
            state = {
                ...state,
                camera:{
                    ...state.camera,
                    near:value,
                }
            }
            break;
        case 'positionX':{
            
            state = {
                ...state,
                camera:{
                    ...state.camera,
                    position:{
                        ...state.camera.position,
                        x:value,
                    }
                }    
            }
        }
        break;
        case 'positionY':{
            state = {
                ...state,
                camera:{
                    ...state.camera,
                    position:{
                        ...state.camera.position,
                        y:value,
                    }
                }
            }
        }
       break;
       case 'positionZ':{
            state = {
                ...state,
                camera:{
                    ...state.camera,
                    position:{
                        ...state.camera.position,
                        z:value,
                    }
                }
            }
       }
    }
    return state;
}
