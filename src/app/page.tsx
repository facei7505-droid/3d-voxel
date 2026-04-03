"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Voxel from "@/components/Voxel";
import { generateMockCommits } from "@/data/mockData";

export default function Home() {
  const commits = generateMockCommits();

  const offsetX = -4.5;
  const offsetZ = -3;

  return (
    <main className="bg-black h-screen w-full">
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} castShadow intensity={1} />
        
        <Environment preset="city" />
        
        <group position={[offsetX, 0, offsetZ]}>
          {commits.map((commit, index) => (
            <Voxel
              key={index}
              position={[commit.x, 0, commit.z]}
              commits={commit.commits}
            />
          ))}
        </group>

        <ContactShadows position={[0, -0.1, 0]} opacity={0.6} blur={2.5} />
        
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </main>
  );
}