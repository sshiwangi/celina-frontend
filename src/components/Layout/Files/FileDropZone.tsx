"use client";

import React, { useRef } from "react";
import { Plus } from "lucide-react";

interface FileDropzoneProps {
  onFileDrop: (files: FileList) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileDrop }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      console.log("Dropped files:", e.dataTransfer.files); // Log dropped file data
      onFileDrop(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Selected files:", e.target.files); // Log selected file data
      onFileDrop(e.target.files);
    }
  };

  // Function to trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2 w-full flex flex-col justify-center items-center">
      <div
        role="presentation"
        tabIndex={0}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput} // Add click handler
        className="dropzone group relative border-dashed border-[3px] min-h-20 flex flex-col items-center justify-center text-wrap mx-auto rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-all duration-150 ease-in-out bg-secondary border-border/80 hover:border-border"
      >
        <input
          ref={fileInputRef}
          accept="text/markdown,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv,.xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv"
          type="file"
          onChange={handleFileInput}
          className="hidden"
        />
        {/* SVG and text content remain the same */}
        <svg
          width="29.375"
          height="27.2754"
          viewBox="0 0 29.375 27.2754"
          className="w-12 h-12 mb-2 fill-icon/30 group-hover:fill-icon/40"
        >
          {/* SVG paths remain the same */}
        </svg>
        <p className="text-sm text-text/30 font-semibold text-center">
          Drag and drop a file here or click to select file locally.
        </p>
      </div>
      <Description />
      <ActionButtons onChooseFile={triggerFileInput} />
    </div>
  );
};

const Description = () => {
  return (
    <div className="flex justify-center items-center w-[330px]">
      <div className="text-center text-muted-foreground">
        <h2 className="text-xl font-medium text-text">Knowledge Base</h2>
        <p className="text-md text-text/40 mb-4">
          Knowledge base is a bank of files that are accessible by your
          assistants.
        </p>
        <p className="text-md text-text/40">
          You can upload a PDF, etc and attach it to your assistants, they pull
          from these for more context during conversations.
        </p>
      </div>
    </div>
  );
};

const ActionButtons = ({ onChooseFile }: { onChooseFile: () => void }) => {
  return (
    <div className="flex flex-row gap-x-2">
      <button
        onClick={onChooseFile}
        className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30"
      >
        <span className="text-white/80 group-hover:text-white pointer-events-none">
          Choose File
        </span>
        <span className="ml-2">
          <Plus className="fill-white/50 group-hover:fill-white/70 w-[16px] h-[16px] group-hover:rotate-90 transition-all duration-150 ease-in-out" />
        </span>
      </button>
    </div>
  );
};

export default FileDropzone;
