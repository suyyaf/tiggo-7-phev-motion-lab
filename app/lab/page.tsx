import type { Metadata } from "next";

import LabClientPage from "./lab-client";

export const metadata: Metadata = {
  title: "Lab | Tiggo 7 PHEV Motion Lab",
  description:
    "Interaction and 3D prep chapter for the Tiggo 7 PHEV motion-first showcase.",
};

export default function LabPage() {
  return <LabClientPage />;
}
