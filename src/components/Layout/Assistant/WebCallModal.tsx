// import AudioBlob from "@/components/Home/AudioBlob";
// import { Modal } from "@/components/ui/Modal";
// import { MicIcon, MicOffIcon, PhoneIcon } from "lucide-react";
// import { useEffect, useState } from "react";

// interface WebCallModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// interface WebRTCConnection {
//   peerConnection: RTCPeerConnection | null;
//   dataChannel: RTCDataChannel | null;
//   audioStream: MediaStream | null;
//   audioAnalyzer?: AnalyserNode | null;
//   audioContext?: AudioContext | null;
// }

// export default function WebCallModal({ isOpen, onClose }: WebCallModalProps) {
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [audioLevel, setAudioLevel] = useState(0);
//   const [connection, setConnection] = useState<WebRTCConnection>({
//     peerConnection: null,
//     dataChannel: null,
//     audioStream: null,
//   });

//   const startCall = async () => {
//     setIsConnecting(true);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const audioContext = new AudioContext();
//       const analyzer = audioContext.createAnalyser();
//       const source = audioContext.createMediaStreamSource(stream);
//       source.connect(analyzer);

//       setConnection((prev) => ({
//         ...prev,
//         audioStream: stream,
//         audioContext,
//         audioAnalyzer: analyzer,
//       }));

//       // Start audio level monitoring
//       const dataArray = new Uint8Array(analyzer.frequencyBinCount);
//       const updateAudioLevel = () => {
//         analyzer.getByteFrequencyData(dataArray);
//         const average =
//           dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length;
//         setAudioLevel(average);
//         requestAnimationFrame(updateAudioLevel);
//       };
//       updateAudioLevel();
//     } catch (error) {
//       console.error("Error accessing microphone:", error);
//       setIsConnecting(false);
//     }
//   };

//   const toggleMute = () => {
//     if (connection.audioStream) {
//       connection.audioStream.getAudioTracks().forEach((track) => {
//         track.enabled = !track.enabled;
//       });
//       setIsMuted(!isMuted);
//     }
//   };

//   const endCall = () => {
//     if (connection.audioStream) {
//       connection.audioStream.getTracks().forEach((track) => track.stop());
//     }
//     if (connection.audioContext) {
//       connection.audioContext.close();
//     }
//     setConnection({
//       peerConnection: null,
//       dataChannel: null,
//       audioStream: null,
//     });
//     setIsConnecting(false);
//     onClose();
//   };

//   useEffect(() => {
//     return () => {
//       endCall();
//     };
//   }, []);

//   return (
//     <Modal isOpen={isOpen} onClose={endCall}>
//       <div className="flex flex-col items-center p-6 space-y-6">
//         <div className="relative">
//           <AudioBlob
//             isListening={!isMuted && !!connection.audioStream}
//             audioLevel={audioLevel}
//           />
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={toggleMute}
//             disabled={!connection.audioStream}
//             className="p-4 rounded-full bg-gray-800 hover:bg-gray-700 
//                      transition-colors disabled:opacity-50"
//           >
//             {isMuted ? (
//               <MicOffIcon className="w-6 h-6 text-red-400" />
//             ) : (
//               <MicIcon className="w-6 h-6 text-white" />
//             )}
//           </button>

//           <button
//             onClick={connection.audioStream ? endCall : startCall}
//             className="px-6 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400
//                      hover:from-cyan-500 hover:to-blue-500 transition-all
//                      text-white font-medium flex items-center gap-2"
//           >
//             <PhoneIcon className="w-6 h-6" />
//             {connection.audioStream ? "End Call" : "Start Call"}
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// }
