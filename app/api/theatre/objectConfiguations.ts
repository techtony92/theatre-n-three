import { types } from "@theatre/core"
export const CanvasTheatreConfig = {
        camera:{
            fov:types.number(0.75, {range:[0, 100]} ),
            near: types.number(0.1, {range:[0.1,1]}),
            far:types.number(1000, {range:[0,1500]}),
            position: types.compound({
                x:types.number(0, {range:[-180,180], nudgeMultiplier:1}),
                y:types.number(0, {range:[-180,180], nudgeMultiplier:1}),
                z:types.number(5, {range:[-180,180], nudgeMultiplier:1}),
            })
        },
        orbitControls:types.boolean(false,{
            label:"enableControls"
        }),
        shadows:types.boolean(false, {
            label:"ShadowsActive",
        }),
        orthographic:types.boolean(false,{
            label:"Orthographic Camera"
        }),
        legacy:types.boolean(false,{
            label:"Three.ColorManagement"
        }),
        linear:types.boolean(false,{
            label:"Disable sRGB Color Space and Gamma Color Correction"
        }),
        flat:types.boolean(false, {
            label:"Use No-Tone Mapping"
        })
    }