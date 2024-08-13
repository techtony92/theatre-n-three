import { useReducer } from "react";
import type { CanvasState } from "../api/three/types";
import { canvasReducer } from "./canvasState";
export enum STATE_MACHINES  {
    CANVAS = "CANVAS",
    SPHERE = "SPHERE",
    CUSTOM = "CUSTOM"
}



export function useThreeState(initialState:CanvasState , type:STATE_MACHINES){
    return useReducer(canvasReducer, initialState);
}