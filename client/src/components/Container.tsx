import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="min-h-max-h-screen max-w-7xl mx-auto sm:py-6 lg:px-8 ">
      {children}
    </main>
  );
};
