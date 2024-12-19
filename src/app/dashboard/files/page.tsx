"use client"
import FileDropzone from "@/components/Layout/Files/FileDropZone";
import React from "react";

function Files() {
  const handleFileDrop = (files: FileList) => {
    // Handle file upload logic here
    console.log("Files dropped:", files);
  };
  return (
    <div
      className="flex flex-col sm:flex-row flex-1 h-full"
      data-testid="documents-page-content"
    >
      <div className="flex w-full justify-center items-center">
        <div className="w-full max-w-[330px]">
          <div className="flex flex-col flex-1 gap-4">
            <FileDropzone onFileDrop={handleFileDrop} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Files;
