"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  Line,
  MeshTransmissionMaterial,
  OrbitControls,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { useMemo } from "react";

import * as THREE from "three";

function wheelMaterial() {
  return new THREE.MeshStandardMaterial({
    color: "#0d1220",
    metalness: 0.65,
    roughness: 0.4,
  });
}

function CarShell({ accent }: { accent: string }) {
  const wheel = useMemo(() => wheelMaterial(), []);

  return (
    <group rotation={[0.16, -0.48, -0.03]} scale={1.08}>
      <RoundedBox args={[3.9, 0.72, 1.56]} radius={0.22} smoothness={6} position={[0, -0.02, 0]}>
        <meshStandardMaterial color="#eef4ff" metalness={0.84} roughness={0.18} />
      </RoundedBox>

      <RoundedBox args={[2.28, 0.62, 1.24]} radius={0.18} smoothness={6} position={[0.05, 0.48, 0]}>
        <meshStandardMaterial color="#f9fbff" metalness={0.74} roughness={0.15} />
      </RoundedBox>

      <RoundedBox args={[3.4, 0.14, 1.4]} radius={0.08} smoothness={4} position={[0, -0.42, 0]}>
        <meshStandardMaterial color="#0b111b" metalness={0.45} roughness={0.58} />
      </RoundedBox>

      <RoundedBox args={[0.92, 0.24, 0.86]} radius={0.1} smoothness={4} position={[1.38, 0.13, 0]}>
        <meshStandardMaterial color="#0f1624" metalness={0.62} roughness={0.22} />
      </RoundedBox>

      <RoundedBox args={[0.96, 0.1, 1.1]} radius={0.05} smoothness={4} position={[1.82, 0.22, 0]}>
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.82} roughness={0.18} metalness={0.22} />
      </RoundedBox>

      <RoundedBox args={[0.92, 0.08, 1.1]} radius={0.05} smoothness={4} position={[-1.82, 0.26, 0]}>
        <meshStandardMaterial color="#ff6b7a" emissive="#ff6b7a" emissiveIntensity={0.55} roughness={0.18} metalness={0.22} />
      </RoundedBox>

      <RoundedBox args={[1.62, 0.08, 1.16]} radius={0.04} smoothness={4} position={[0.04, 0.55, 0]}>
        <meshStandardMaterial color="#0b101c" metalness={0.32} roughness={0.08} opacity={0.82} transparent />
      </RoundedBox>

      <mesh position={[1.28, 0.02, 0.84]} rotation={[0, 0, Math.PI / 2]} material={wheel}>
        <cylinderGeometry args={[0.42, 0.42, 0.3, 36]} />
      </mesh>
      <mesh position={[-1.28, 0.02, 0.84]} rotation={[0, 0, Math.PI / 2]} material={wheel}>
        <cylinderGeometry args={[0.42, 0.42, 0.3, 36]} />
      </mesh>
      <mesh position={[1.28, 0.02, -0.84]} rotation={[0, 0, Math.PI / 2]} material={wheel}>
        <cylinderGeometry args={[0.42, 0.42, 0.3, 36]} />
      </mesh>
      <mesh position={[-1.28, 0.02, -0.84]} rotation={[0, 0, Math.PI / 2]} material={wheel}>
        <cylinderGeometry args={[0.42, 0.42, 0.3, 36]} />
      </mesh>

      <mesh position={[1.28, 0.02, 0.84]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.28, 0.05, 16, 48]} />
        <meshStandardMaterial color="#d9e4f8" metalness={0.8} roughness={0.18} />
      </mesh>
      <mesh position={[-1.28, 0.02, 0.84]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.28, 0.05, 16, 48]} />
        <meshStandardMaterial color="#d9e4f8" metalness={0.8} roughness={0.18} />
      </mesh>
      <mesh position={[1.28, 0.02, -0.84]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.28, 0.05, 16, 48]} />
        <meshStandardMaterial color="#d9e4f8" metalness={0.8} roughness={0.18} />
      </mesh>
      <mesh position={[-1.28, 0.02, -0.84]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.28, 0.05, 16, 48]} />
        <meshStandardMaterial color="#d9e4f8" metalness={0.8} roughness={0.18} />
      </mesh>

      <mesh position={[0.18, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.52, 0.64]} />
        <MeshTransmissionMaterial
          thickness={0.16}
          roughness={0.08}
          transmission={0.92}
          ior={1.22}
          chromaticAberration={0.03}
          backside
        />
      </mesh>

      <mesh position={[0, 0.72, 0.78]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.82, 0.18]} />
        <meshStandardMaterial color="#0a0f19" roughness={0.08} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.72, -0.78]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.82, 0.18]} />
        <meshStandardMaterial color="#0a0f19" roughness={0.08} metalness={0.4} />
      </mesh>

      <Line
        points={[
          [-1.96, 0.32, 0],
          [-1.45, 0.85, 0],
          [0.14, 1.08, 0],
          [1.72, 0.8, 0],
          [1.98, 0.4, 0],
        ]}
        color="#dbe7ff"
        lineWidth={2.2}
        transparent
        opacity={0.6}
      />
    </group>
  );
}

function FloatingHud({ accent }: { accent: string }) {
  return (
    <group position={[0, 1.45, 0]}>
      <Line
        points={[
          [-2.5, 0, 0],
          [-1.1, 0, 0],
          [-0.7, 0.24, 0],
          [0.7, 0.24, 0],
          [1.1, 0, 0],
          [2.5, 0, 0],
        ]}
        color={accent}
        lineWidth={1.8}
        transparent
        opacity={0.8}
      />
      <Text
        position={[0, 0.14, 0]}
        fontSize={0.16}
        color="#d7e6ff"
        anchorX="center"
        anchorY="middle"
      >
        TIGGO 7 PHEV · 3D PREP
      </Text>
      <Text
        position={[0, -0.13, 0]}
        fontSize={0.1}
        color="#8eb8ff"
        anchorX="center"
        anchorY="middle"
      >
        show car · orbit · future hotspots
      </Text>
    </group>
  );
}

type HeroStage3DProps = {
  accent: string;
  modeTitle: string;
};

export default function HeroStage3D({ accent, modeTitle }: HeroStage3DProps) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_50%_32%,rgba(117,168,255,0.22),transparent_34%),linear-gradient(180deg,rgba(6,12,24,0.9),rgba(4,8,16,0.95))]">
      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
        3D prep · stylized concept car
      </div>
      <div className="absolute bottom-4 left-4 z-10 max-w-xs rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs leading-5 text-slate-300 backdrop-blur-md">
        A more car-like stylized object for showroom and cockpit chapters. It is still not the real Tiggo geometry, but it now behaves much more like the future 360 object slot.
      </div>
      <Canvas camera={{ position: [0, 1.45, 5.6], fov: 40 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#050911"]} />
        <fog attach="fog" args={["#050911", 6, 12]} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 6, 4]} intensity={2.8} color={accent} />
        <pointLight position={[-4, -2, 3]} intensity={26} color="#75a8ff" distance={12} />
        <pointLight position={[3, 2, -1]} intensity={18} color="#ff5ac8" distance={10} />

        <Float speed={1.55} rotationIntensity={0.24} floatIntensity={0.42}>
          <FloatingHud accent={accent} />
          <CarShell accent={accent} />
        </Float>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.08, 0]}>
          <circleGeometry args={[3.4, 72]} />
          <meshStandardMaterial color="#07111f" metalness={0.12} roughness={0.84} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.06, 0]}>
          <ringGeometry args={[1.6, 2.95, 72]} />
          <meshBasicMaterial color={accent} transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>

        <OrbitControls
          enablePan={false}
          maxDistance={6.8}
          minDistance={4.4}
          maxPolarAngle={Math.PI / 1.95}
          minPolarAngle={Math.PI / 3.25}
          autoRotate
          autoRotateSpeed={0.72}
        />
      </Canvas>
      <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-right text-[11px] uppercase tracking-[0.18em] text-slate-200">
        {modeTitle}
      </div>
    </div>
  );
}
