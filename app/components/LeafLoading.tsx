"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MapleLeafLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-linear-to-b from-[#1a1a1a] to-[#0d0d0d] text-white z-9999">

      {/* Center Leaf */}
      <motion.div
        initial={{ scale: 0.6, rotate: -10, opacity: 0 }}
        animate={{
          scale: [0.6, 1.5, 1],
          rotate: [-10, 10, 0],
          opacity: 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/maple-light.png"
          alt="Maple leaf loader"
          width={80}
          height={80}
          className="drop-shadow-[0_0_15px_#ff4d00]"
        />
      </motion.div>

      {/* Text */}
      <motion.p
        className="mt-6 text-lg tracking-wider text-orange-300 font-semibold"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
