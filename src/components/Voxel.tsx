"use client";

import { useRef } from "react";
import * as THREE from "three";

interface VoxelProps {
  position: [number, number, number];
  commits: number;
}

const COLORS = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

const HEIGHTS = {
  0: 0.2,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
};

export default function Voxel({ position, commits }: VoxelProps) {
  const height = HEIGHTS[commits as keyof typeof HEIGHTS] ?? 0.2;
  const color = COLORS[commits as keyof typeof COLORS] ?? "#161b22";

  const yPos = height / 2;

  return (
    <mesh
      position={[position[0], yPos, position[2]]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[0.8, height, 0.8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}