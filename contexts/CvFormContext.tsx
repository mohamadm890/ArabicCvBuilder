
// contexts/CvFormContext.tsx
"use client";  // Important for Next.js app directory if using React hooks

import React, { createContext, ReactNode, useContext } from "react";
import { useCvForm, CvForm } from "../hooks/useCvForm"; // import your hook

// Define the shape of context value — everything your hook returns
type CvFormContextType = ReturnType<typeof useCvForm>;

// Create context with undefined initial value
const CvFormContext = createContext<CvFormContextType | undefined>(undefined);

// Provider component wraps the app or part of it
export function CvFormProvider({ children }: { children: ReactNode }) {
  const cvForm = useCvForm();

  return (
    <CvFormContext.Provider value={cvForm}>
      {children}
    </CvFormContext.Provider>
  );
}

// Custom hook to use context easily
export function useCvFormContext() {
  const context = useContext(CvFormContext);
  if (!context) {
    throw new Error("useCvFormContext must be used within a CvFormProvider");
  }
  return context;
}
