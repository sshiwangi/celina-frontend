import { Modal, ModalBody, ModalFooter, ModalHeader } from "@/components/ui/Modal";
import { useState } from "react";
import PhoneInput from "./PhoneInput";
import { PhoneIcon } from "lucide-react";

interface MobileCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCall: (phoneNumber: string) => void;
}

export default function MobileCallModal({
  isOpen,
  onClose,
  onCall,
}: MobileCallModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCall = () => {
    if (phoneNumber.length === 10) {
      onCall("+91" + phoneNumber);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Mobile Call</ModalHeader>

      <ModalBody>
        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            Enter your phone number to receive a call from the assistant
          </p>
          <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />
          {phoneNumber && phoneNumber.length !== 10 && (
            <p className="text-xs text-red-400">
              Please enter a valid 10-digit phone number
            </p>
          )}
        </div>
      </ModalBody>

      <ModalFooter>
        <button
          onClick={handleCall}
          disabled={phoneNumber.length !== 10}
          className="w-full py-2 px-4 rounded-md
                   bg-gradient-to-r from-cyan-400 to-blue-400
                   text-white font-medium
                   hover:from-cyan-500 hover:to-blue-500
                   focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                   transform transition-all
                   active:scale-95 disabled:opacity-50
                   inline-flex items-center justify-center gap-2"
        >
          <PhoneIcon className="w-4 h-4" />
          Call Now
        </button>
      </ModalFooter>
    </Modal>
  );
}
