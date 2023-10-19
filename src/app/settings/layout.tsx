import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: LayoutProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Layout Wrapper</h1>
      <div className="border border-dashed border-red-500 p-4">{children}</div>
    </div>
  );
}
