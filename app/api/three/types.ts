import  { types } from "@theatre/core";

export interface ThreeIndexAccess {
    [index:string|number]:string|number|object;
}
export interface CanvasState extends ThreeIndexAccess {
    camera: {
        fov:number;
        far:number;
        near:number;
        position:{
            x:number;
            y:number;
            z:number;
        }
    }
}


// (method) ISheet.object<{
//     camera: {
//         fov: PropTypeConfig_Number;
//         near: PropTypeConfig_Number;
//         far: PropTypeConfig_Number;
//         position: PropTypeConfig_Compound<...>;
//     };
//     ... 4 more ...;
//     flat: PropTypeConfig_Boolean;
// }>(key: string, props: {
//     ...;
// }, options?: {
//     ...;
// } | undefined): ISheetObject<...>