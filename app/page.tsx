"use client"
import Image from "next/image";
import {useRef} from "react";
import CanvasProvider from "@/app/api/three/CanvasProvider";
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <main id="main">
      <header id="header"></header>
        <div id="scene">
          <CanvasProvider ref={canvasRef}/>
        </div>
    </main>
  );
}
