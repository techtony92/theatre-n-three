import { Canvas , useFrame} from "@react-three/fiber";
import {forwardRef , useRef, useEffect} from "react";
import {  Sky } from "@react-three/drei";
import { AnimationTheater } from "../theatre/initDefs";
import { types } from "@theatre/core";
import * as Three from "three";
import { useThreeState } from "@/app/stateMachines/threeStates";
import {CanvasDefault} from "@/app/stateMachines/canvasState";
import { STATE_MACHINES } from "@/app/stateMachines/threeStates";
import { CanvasTheatreConfig } from "../theatre/objectConfiguations";
import { PerspectiveCamera } from "@react-three/drei";
import { ModelLoader } from "./ModelLoader";
import ModelProvider from "@/app/models/ModelProvider";
import Basebuilding from "@/app/models/Base_building";
const CanvasProvider = forwardRef<HTMLCanvasElement>((props, ref) => {
    const theatre = new AnimationTheater();
    const canvasProject = theatre.createProject("CanvasMovie");
    const canvasSheet = theatre.createObjectSheet("CanvasScript", canvasProject);
    const [state, dispatch] = useThreeState(CanvasDefault,STATE_MACHINES.CANVAS);
    const canvasObjectObserver = canvasSheet.object("Canvas Observer", CanvasTheatreConfig);
    const cameraRef = useRef<Three.PerspectiveCamera>(null);
    useEffect(() =>{
        canvasObjectObserver.onValuesChange((updates) =>{
        
        dispatch({attribute:'fov', value: updates.camera.fov});
        dispatch({attribute:'far', value: updates.camera.far});
        dispatch({attribute:'near', value: updates.camera.near});
        dispatch({attribute:'positionX', value: updates.camera.position.x});
        dispatch({attribute:'positionY', value: updates.camera.position.y});
        dispatch({attribute:'positionZ', value: updates.camera.position.z});
            
            
        })
        return () => {};
    }, []);
    
    console.log(state.camera.fov)
    // camera={{fov:state.camera.fov, far:state.camera.far, near: state.camera.near, position:[state.camera.position.x, state.camera.position.y, state.camera.position.z]}}
    return (
        <> 
            <Canvas shadows ref={ref}>
               <PerspectiveCamera makeDefault fov={state.camera.fov} far={state.camera.far} near={state.camera.near} position={[state.camera.position.x, state.camera.position.y, state.camera.position.z]} ref={cameraRef}/>
                <ambientLight intensity={0.1} />
                <Sky sunPosition={[100, 20, 100]} />
                <ambientLight intensity={0.3} />
                <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
                <directionalLight color="green" position={[0, 0, 45]} />
                <mesh>
                    <boxGeometry  />
                    <meshStandardMaterial />
                </mesh>
                <ModelLoader>
                    <ModelProvider model={<Basebuilding />}/>
                </ModelLoader>
            </Canvas>
        </>
    )
    
})

export default CanvasProvider;