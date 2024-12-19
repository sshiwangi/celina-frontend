// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// interface FileContentExtractorProps {
//   file: File;
//   onDataExtracted: (data: SalesData[]) => void;
// }

// export const FileContentExtractor: React.FC<FileContentExtractorProps> = ({
//   file,
//   onDataExtracted,
// }) => {
//   const [columns, setColumns] = useState<string[]>([]);
//   const [preview, setPreview] = useState<string>("");
//   const [mappings, setMappings] = useState<Record<string, string>>({});

//   // Column mapping UI for user to match columns
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//     >
//       <div className="bg-secondary p-6 rounded-xl shadow-lg max-w-2xl w-full">
//         <h2 className="text-xl font-bold mb-4">
//           Map File Content to Data Fields
//         </h2>
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {/* Content Preview */}
//           <div className="border border-border rounded-lg p-4">
//             <h3 className="text-sm font-semibold mb-2">File Content Preview</h3>
//             <pre className="text-xs overflow-auto max-h-60">{preview}</pre>
//           </div>

//           {/* Column Mapping */}
//           <div className="border border-border rounded-lg p-4">
//             <h3 className="text-sm font-semibold mb-2">Map to Fields</h3>
//             {Object.entries(REQUIRED_FIELDS).map(([field, label]) => (
//               <div key={field} className="mb-2">
//                 <label className="text-sm text-text/60">{label}</label>
//                 <select
//                   className="w-full bg-background border border-border rounded-lg p-2"
//                   onChange={(e) => handleMapping(field, e.target.value)}
//                 >
//                   <option value="">Select column</option>
//                   {columns.map((col) => (
//                     <option key={col} value={col}>
//                       {col}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Smart Data Extraction */}
//         <div className="mb-6">
//           <h3 className="text-sm font-semibold mb-2">Smart Detection</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {suggestions.map((suggestion) => (
//               <div
//                 key={suggestion.field}
//                 className="p-3 bg-primary/10 rounded-lg cursor-pointer hover:bg-primary/20"
//                 onClick={() => applySuggestion(suggestion)}
//               >
//                 <p className="text-sm font-medium">{suggestion.label}</p>
//                 <p className="text-xs text-text/60">
//                   Detected: {suggestion.value}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-end gap-3">
//           <button
//             className="px-4 py-2 text-text/60 hover:text-text"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>
//           <button
//             className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
//             onClick={handleExtract}
//           >
//             Extract Data
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
