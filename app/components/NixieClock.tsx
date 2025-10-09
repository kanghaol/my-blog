"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NixieClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const digits = `${hours}${minutes}${seconds}`.split("");

  return (
    <div className="flex justify-center gap-3 p-6">
      {digits.map((digit, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-16 h-24 bg-[#0a0a0a] border-2 border-[#8B0000]/40 rounded-lg shadow-lg 
                     flex items-center justify-center overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[#ff4500]/10 blur-md rounded-lg" />

          {/* Tube glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-60" />

          {/* Glowing number */}
          <span className="relative z-10 text-5xl font-nixie text-[#ff6600] drop-shadow-[0_0_10px_#ff6600]">
            {digit}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
