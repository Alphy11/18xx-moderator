import React from "react";

type SpaceProps = {
  value: number;
};

export default function Space({ value }: SpaceProps) {
  return <div className="flex-1">{value || null}</div>;
}
