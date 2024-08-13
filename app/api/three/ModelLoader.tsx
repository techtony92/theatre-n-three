import ModelProvider from "@/app/models/ModelProvider";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
export function ModelLoader({children}:{children:React.JSX.Element}){
    return(
        <>
            {children}
        </>
    )
}