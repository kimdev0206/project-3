import React from "react";

export interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Tab({ children }: Props) {
  return <>{children}</>;
}
