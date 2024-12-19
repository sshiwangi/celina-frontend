"use client";

import React from "react";
import { Plus } from "lucide-react";

interface FileDropzoneProps {
  onFileDrop: (files: FileList) => void;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({ onFileDrop }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onFileDrop(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFileDrop(e.target.files);
    }
  };

  return (
    <div className="space-y-2">
      <div
        role="presentation"
        tabIndex={0}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="dropzone group relative border border-dashed border-[3px] min-h-20 flex flex-col items-center justify-center text-wrap mx-auto rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-all duration-150 ease-in-out bg-secondary border-border/80 hover:border-border"
      >
        <input
          accept="text/markdown,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          type="file"
          onChange={handleFileInput}
          className="hidden"
        />
        <svg
          width="29.375"
          height="27.2754"
          viewBox="0 0 29.375 27.2754"
          className="w-12 h-12 mb-2 fill-icon/30 group-hover:fill-icon/40"
        >
          <g>
            <rect height="27.2754" opacity="0" width="29.375" x="0" y="0" />
            <path
              d="M13.7988 10.332C13.7988 11.582 14.3945 12.1777 15.6445 12.1777L22.7148 12.1777L22.7148 21.0449C22.7148 23.0762 21.709 24.1016 19.6875 24.1016L11.7376 24.1016C12.279 23.182 12.5879 22.1158 12.5879 20.9863C12.5879 17.5293 9.74609 14.6875 6.28906 14.6875L6.28906 6.23047C6.28906 4.19922 7.30469 3.16406 9.31641 3.16406L13.7988 3.16406ZM16.4062 4.0918L21.7871 9.57031C22.2559 10.0488 22.5391 10.4395 22.5977 10.8398L15.6738 10.8398C15.3125 10.8398 15.1367 10.6641 15.1367 10.3125L15.1367 3.27148C15.5469 3.33984 15.9473 3.62305 16.4062 4.0918Z"
              fillOpacity="0.85"
            />
            <path
              d="M11.25 20.9863C11.25 23.6914 8.98438 25.9473 6.28906 25.9473C3.57422 25.9473 1.32812 23.7109 1.32812 20.9863C1.32812 18.2617 3.57422 16.0254 6.28906 16.0254C9.01367 16.0254 11.25 18.2617 11.25 20.9863ZM5.69336 18.4766L5.69336 20.3809L3.7793 20.3809C3.42773 20.3809 3.18359 20.625 3.18359 20.9863C3.18359 21.3477 3.42773 21.582 3.7793 21.582L5.69336 21.582L5.69336 23.4961C5.69336 23.8477 5.92773 24.0918 6.28906 24.0918C6.66016 24.0918 6.89453 23.8477 6.89453 23.4961L6.89453 21.582L8.79883 21.582C9.16016 21.582 9.39453 21.3477 9.39453 20.9863C9.39453 20.625 9.16016 20.3809 8.79883 20.3809L6.89453 20.3809L6.89453 18.4766C6.89453 18.125 6.66016 17.8809 6.28906 17.8809C5.92773 17.8809 5.69336 18.125 5.69336 18.4766Z"
              fillOpacity="0.85"
            />
          </g>
        </svg>
        <p className="text-sm text-text/30 font-semibold text-center">
          Drag and drop a file here or click to select file locally.
        </p>
      </div>
      <Description />
      <ActionButtons />
    </div>
  );
};

const Description = () => {
  return (
    <div className="flex justify-center items-center w-[330px]">
      <div className="text-left text-muted-foreground">
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

const ActionButtons = () => {
  return (
    <div className="flex flex-row gap-x-2">
      <button className="inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg ring-2 ring-primary/80 bg-primary/80 hover:saturate-[1.3] hover:bg-primary hover:ring-primary border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-primary/30 h-10 px-4 py-2">
        <span className="text-white/80 group-hover:text-white pointer-events-none">
          Choose File
        </span>
        <span className="ml-2">
          <Plus className="fill-white/50 group-hover:fill-white/70 w-[16px] h-[16px] group-hover:rotate-90 transition-all duration-150 ease-in-out" />
        </span>
      </button>
      <a
        href="https://docs.vapi.ai/customization/knowledgebase"
        target="_blank"
        rel="noreferrer"
        className="w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 block truncate hover:no-underline"
      >
        Documentation
      </a>
    </div>
  );
};

export default FileDropzone;
