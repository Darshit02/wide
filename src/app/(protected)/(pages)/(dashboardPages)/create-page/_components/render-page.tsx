"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import usePrtomptStore from "@/store/usePromptStore";
import CreatePage from "./CreatePage/create-page";
import CreativeAI from "./GenrateAI/creative-ai";

type Props = {};

const RenderPage = (props: Props) => {
  const { page, setPage } = usePrtomptStore();
  const router = useRouter();

  const handleSelectOption = (option: string) => {
    if (option === "template") {
      router.push("/template");
    } else if (option === "create-scratch") {
      setPage("create-scratch");
    } else {
      setPage("creative-ai");
    }
  };

  const handleBack = () => {
    setPage("create");
  }

  const renderStep = () => {
    switch (page) {
      case "create":
        return <CreatePage onSelectOption={handleSelectOption} />;
      case "creative-ai":
        return <CreativeAI onBack={handleBack}/>;
      case "create-scratch":
        return <div>Create Scratch</div>;
      default:
        return null;
    }
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={page}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderStep()}
      </motion.div>
    </AnimatePresence>
  );
};

export default RenderPage;
