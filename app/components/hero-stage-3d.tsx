"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox } from "@react-three/drei";

type HeroStage3DProps = {
  accent: string;
  modeTitle: string;
};

export default function HeroStage3D({ accent, modeTitle }: HeroStage3DProps) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_50%_32%,rgba(117,168,255,0.22),transparent_34%),linear-gradient(180deg,rgba(6,12,24,0.9),rgba(4,8,16,0.95))]">
      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
        3D prep · concept stage
      </div>
      <div className="absolute bottom-4 left-4 z-10 max-w-xs rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs leading-5 text-slate-300 backdrop-blur-md">
        Orbit-enabled placeholder scene for 360 prep. When real turntable frames or a car model arrive, this slot is ready to become the actual interactive object.
      </div>
      <Canvas camera={{ position: [0, 1.35, 5.2], fov: 42 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#050911"]} />
        <fog attach="fog" args={["#050911", 6, 12]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 6, 4]} intensity={2.6} color={accent} />
        <pointLight position={[-4, -2, 3]} intensity={24} color="#75a8ff" distance={12} />
        <pointLight position={[3, 2, -1]} intensity={16} color="#ff5ac8" distance={10} />

        <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
          <group rotation={[0.18, -0.4, -0.05]}>
            <RoundedBox args={[3.25, 0.82, 1.32]} radius={0.18} smoothness={6} position={[0, 0, 0]}>
              <meshStandardMaterial color="#edf3ff" metalness={0.8} roughness={0.24} />
            </RoundedBox>
            <RoundedBox args={[1.45, 0.52, 1.08]} radius={0.16} smoothness={6} position={[0.1, 0.55, 0]}>
              <meshStandardMaterial color="#f6f8ff" metalness={0.72} roughness={0.2} />
            </RoundedBox>
            <RoundedBox args={[3.38, 0.1, 1.38]} radius={0.08} smoothness={4} position={[0, -0.45, 0]}>
              <meshStandardMaterial color="#0a111e" metalness={0.35} roughness={0.56} />
            </RoundedBox>
            <mesh position={[1.15, 0.12, 0.69]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.38, 0.38, 0.28, 36]} />
              <meshStandardMaterial color="#0d1220" metalness={0.5} roughness={0.45} />
            </mesh>
            <mesh position={[-1.15, 0.12, 0.69]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.38, 0.38, 0.28, 36]} />
              <meshStandardMaterial color="#0d1220" metalness={0.5} roughness={0.45} />
            </mesh>
            <mesh position={[1.15, 0.12, -0.69]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.38, 0.38, 0.28, 36]} />
              <meshStandardMaterial color="#0d1220" metalness={0.5} roughness={0.45} />
            </mesh>
            <mesh position={[-1.15, 0.12, -0.69]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.38, 0.38, 0.28, 36]} />
              <meshStandardMaterial color="#0d1220" metalness={0.5} roughness={0.45} />
            </mesh>
            <mesh position={[1.68, 0.18, 0]}>
              <sphereGeometry args={[0.09, 20, 20]} />
              <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.1} />
            </mesh>
          </group>
        </Float>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
          <circleGeometry args={[3.2, 64]} />
          <meshStandardMaterial color="#07111f" metalness={0.1} roughness={0.85} />
        </mesh>

        <OrbitControls
          enablePan={false}
          maxDistance={6.5}
          minDistance={4.2}
          maxPolarAngle={Math.PI / 1.95}
          minPolarAngle={Math.PI / 3.2}
          autoRotate
          autoRotateSpeed={0.75}
        />
      </Canvas>
      <div className="pointer-events-none absolute right-4 top-4 z-10 rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-right text-[11px] uppercase tracking-[0.18em] text-slate-200">
        {modeTitle}
      </div>
    </div>
  );
}
