"use client";

import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/Modal";
import EmptyState from "@/components/Layout/EmptyState";
import AssistantDetails from "@/components/Layout/Assistant/AssistantDetails";
import { Loader2 } from "lucide-react";
import { celinaApi } from "@/api_instance";
import AssistantTabs from "@/components/Layout/Assistant/AssistantTabs";

interface Agent {
  name: string;
  productLink: string;
}

export default function AssistantsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    agentName: "",
    productLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agentName.trim() || !formData.productLink.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create new agent object from form data
      const newAgent = {
        name: formData.agentName,
        productLink: formData.productLink,
      };

      // Update agents state with new agent
      setAgents((prev) => [...prev, newAgent]);

      // Reset form and close modal
      setFormData({ agentName: "", productLink: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating agent:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("agent name", agents);
  return (
    <div className="flex items-center w-full h-full">
      <div
        className="flex flex-col h-full w-full px-2"
        
      >
        {agents.length === 0 ? (
          <EmptyState
            title="No Agents Available"
            subtitle="Seems like you have not created any agent yet."
            buttonText="Add Agent"
            buttonAction={() => setIsModalOpen(true)}
          />
        ) : (
          <div className="flex flex-col w-full h-full">
            <AssistantDetails assistant={agents[0]} />
            <AssistantTabs />
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Create New Agent</ModalHeader>

          <ModalBody>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="agentName"
                  className="block text-sm font-medium text-gray-100 dark:text-gray-300 mb-1"
                >
                  Agent Name
                </label>
                <input
                  type="text"
                  id="agentName"
                  value={formData.agentName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      agentName: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white text-gray-800 dark:text-gray-100
                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                  placeholder="Enter agent name"
                />
              </div>

              <div>
                <label
                  htmlFor="productLink"
                  className="block text-sm font-medium text-gray-100 dark:text-gray-300 mb-1"
                >
                  Product Link
                </label>
                <input
                  type="url"
                  id="productLink"
                  value={formData.productLink}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      productLink: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                  placeholder="Enter product link"
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md
                       bg-gradient-to-r from-cyan-400 to-blue-400
                       text-white font-medium
                       hover:from-cyan-500 hover:to-blue-500
                       focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                       transform transition-all
                       active:scale-95 disabled:opacity-50"
            >
              Create Agent
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}
