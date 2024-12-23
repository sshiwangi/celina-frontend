"use client";

import { X } from "lucide-react";
import React from "react";

interface ModalContextProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContext = React.createContext<ModalContextProps | undefined>(
  undefined
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        <div className="relative w-full max-w-md bg-secondary/80 rounded-lg shadow-lg m-4">
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export function ModalHeader({ children }: { children: React.ReactNode }) {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("ModalHeader must be used within Modal");

  return (
    <div className="relative flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {children}
      </h2>
      <button
        onClick={context.onClose}
        className="text-gray-200 hover:text-gray-100 transition-colors"
      >
        <X size={20} />
      </button>
    </div>
  );
}

export function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4">{children}</div>;
}

export function ModalFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
}
