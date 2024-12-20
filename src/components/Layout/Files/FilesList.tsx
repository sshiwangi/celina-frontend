"use client";
import React from "react";

interface File {
  name: string;
  type: string;
}

interface FilesListProps {
  files: File[];
  onFileSelect: (file: File) => void;
}

const FilesList: React.FC<FilesListProps> = ({ files, onFileSelect }) => {
  return (
    <div className="w-80 border-r border-border bg-background">
      <div className="flex p-4 sticky top-0 border-b border-border bg-foreground/5 backdrop-blur-lg">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex flex-row ">
            <button className="gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white h-10 px-4 py-2 inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold group rounded-lg ring-1 ring-cyan-500/20 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-cyan-500/30">
              <span className="text-white/80 group-hover:text-white pointer-events-none">
                Choose File
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              onClick={() => onFileSelect(file)}
              className="group flex flex-col p-2 rounded-lg w-full border border-transparent hover:bg-background/50 cursor-pointer transition-all duration-150 ease-in-out bg-primary/10"
            >
              <div className="flex justify-between items-center transition-all duration-150 ease-in-out">
                <div className="flex flex-col justify-between items-start">
                  <div className="ellipsis-text font-semibold text-sm text-text">
                    {file.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilesList;
