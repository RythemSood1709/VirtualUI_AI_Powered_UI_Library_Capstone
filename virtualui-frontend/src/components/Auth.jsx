import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { TbX } from "react-icons/tb";

import { TbLogin2, TbSettings, TbCopy, TbDownload } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const steps = [
  {
    icon: TbLogin2,
    title: "Login with Google",
    desc: "Secure OAuth to unlock all AI tools instantly.",
  },
  {
    icon: HiSparkles,
    title: "Get 150 AI Credits",
    desc: "Free credits to generate premium UI components.",
  },
  {
    icon: TbSettings,
    title: "Customize Props",
    desc: "Fine-tune and preview every change live.",
  },
  {
    icon: TbCopy,
    title: "Generate Components",
    desc: "AI builds production-ready JSX components.",
  },
  {
    icon: TbDownload,
    title: "Copy or Save",
    desc: "Export clean code straight into your project.",
  },
];

import { SiValorant } from "react-icons/si";

const Auth = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row w-full max-w-200 max-h-[90vh] overflow-y-auto rounded-2xl border border-[#3be8ff]/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative "
        >
          {/* cross button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 w-8 h-8 rounded-lg
          bg-white/5 hover:bg-white/10 border border-white/10 flex items-center
            justify-center text-white/50 hover:text-white transition-all
            cursor-pointer"
          >
            <TbX size={20} />
          </button>

          {/* left box */}
          <div className="sm:w-[52%] bg-linear-to-br from-[#03181c] to-[#041e24] p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(59,232,255,0.08)_0%,transparent_70%)] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-7 sm:mb-9"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3be8ff] to-[#0ab5d4] flex items-center justify-center shadow-[0_0_18px_rgba(59,232,255,0.35)]">
                <SiValorant size={20} />
              </div>
              <span
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-xl font-bold text-[#e8f8fa] tracking-tight"
              >
                Virtual UI
              </span>
            </motion.div>

            <p className="text-[10px] font-semibold tracking-[3px] text-[#3be8ff]  uppercase mb-4 sm:mb-5">
              How it Works
            </p>
          </div>

          {/*right box*/}
          <motion.div></motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Auth;
