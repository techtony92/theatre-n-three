import { Canvas , useFrame} from "@react-three/fiber";
import {forwardRef} from "react";
import { AnimationTheater } from "../theatre/initDefs";
const CanvasProvider = forwardRef<HTMLCanvasElement>((props, ref) => {
    const theatre = new AnimationTheater();
    const canvasProject = theatre.createProject("CanvasMovie");
    const canvasSheet = theatre.createObjectSheet("CanvasScript", canvasProject);
    console.log(canvasSheet.address.sheetId);
    return (
        <>
            <Canvas  ref={ref}>
                <color attach="background" args={[240,243,244]} />
                <ambientLight intensity={0.1} />
                <directionalLight color="green" position={[0, 0, 45]} />
                <mesh>
                    <boxGeometry  />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </>
    )

})

export default CanvasProvider;