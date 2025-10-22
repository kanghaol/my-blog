"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NixieClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Start timer only on client prevent SSR mismatch by only rendering the clock after the client has mounted
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Wait until client render
  if (!time) return null;

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const digits = `${hours}${minutes}${seconds}`.split("");

  return (
    <div className="flex justify-center gap-4 p-8 bg-[#050505]">
      {digits.map((digit, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="relative w-20 h-32 rounded-xl border bg-gradient-to-b from-[#0a0a0a] to-[#1a0a00] shadow-[inset_0_0_30px_#ff660033,0_0_30px_#000] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#ff6600]/10 blur-xl rounded-xl animate-pulse opacity-60"></div>

          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-60"></div>
            <div className="glass-shine absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-20 rounded-t-xl"></div>
            <div className="absolute top-[10%] left-[5%] w-[90%] h-[25%] bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-30 blur-sm rounded-full rotate-[2deg]"></div>
          </div>

          <motion.span
            className="relative z-10 text-6xl font-mono text-[#ff6600] drop-shadow-[0_0_12px_#ff6600,0_0_20px_#ff3300]"
            animate={{
              opacity: [1, 0.9, 1, 0.95, 1],
              filter: [
                "drop-shadow(0 0 10px #ff6600)",
                "drop-shadow(0 0 16px #ff3300)",
                "drop-shadow(0 0 12px #ff6600)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {digit}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}
