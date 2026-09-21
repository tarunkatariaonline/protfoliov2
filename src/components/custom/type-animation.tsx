"use client";

import * as React from "react";
import { TypeAnimation as TPA } from "react-type-animation";
import { profile } from "@/lib/data";

const sequence = profile.roles.flatMap((role) => [role, 2200]);

export default function TypeAnimation() {
  return (
    <TPA
      sequence={sequence}
      wrapper="span"
      speed={45}
      cursor
      repeat={Infinity}
      className="text-brand"
    />
  );
}
