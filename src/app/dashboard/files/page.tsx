"use client";
import FileDropzone from "@/components/Layout/Files/FileDropZone";
import FilesList from "@/components/Layout/Files/FilesList";
import SalesTable from "@/components/Layout/Files/SalesTable";
import React, { useState } from "react";

function Files() {
  const [hasUploadedFile, setHasUploadedFile] = useState(false);

  const handleFileDrop = (files: FileList) => {
    if (files.length > 0) {
      setHasUploadedFile(true);
    }
  };

  if (!hasUploadedFile) {
    return (
      <div className="flex w-full justify-center items-center">
        <div className="w-full max-w-[330px]">
          <div className="flex flex-col flex-1 gap-4">
            <FileDropzone onFileDrop={handleFileDrop} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col sm:flex-row flex-1 h-full"
      data-testid="documents-page-content"
    >
      <FilesList />
      <div className="flex-1">
        <SalesTable />
      </div>
    </div>
  );
}

export default Files;
