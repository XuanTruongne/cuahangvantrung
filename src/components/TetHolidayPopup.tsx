import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import tetBanner from "@/assets/ThongBaoNghiTet2026.png";

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  particles: { angle: number; distance: number; size: number }[];
}

const COLORS = [
  "#FFD700", // Gold
  "#FF6B6B", // Red
  "#FF8C00", // Orange
  "#FFE66D", // Yellow
  "#FF4757", // Crimson
  "#FFA502", // Amber
];

const createParticles = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 30) * (Math.PI / 180),
    distance: 60 + Math.random() * 40,
    size: 4 + Math.random() * 4,
  }));
};

export function TetHolidayPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  const createFirework = useCallback(() => {
    const newFirework: Firework = {
      id: Date.now() + Math.random(),
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      particles: createParticles(),
    };
    
    setFireworks(prev => [...prev, newFirework]);
    
    setTimeout(() => {
      setFireworks(prev => prev.filter(f => f.id !== newFirework.id));
    }, 1500);
  }, []);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem("tetPopupShown");
    if (!hasSeenPopup) {
      setIsOpen(true);
      sessionStorage.setItem("tetPopupShown", "true");
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Create initial fireworks
    const initialDelay = setTimeout(() => {
      createFirework();
    }, 300);

    // Create periodic fireworks
    const interval = setInterval(() => {
      createFirework();
    }, 800);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isOpen, createFirework]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Fireworks Container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {fireworks.map((firework) => (
              <div
                key={firework.id}
                className="absolute"
                style={{
                  left: `${firework.x}%`,
                  top: `${firework.y}%`,
                }}
              >
                {firework.particles.map((particle, index) => (
                  <motion.div
                    key={index}
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1, 
                      scale: 1 
                    }}
                    animate={{ 
                      x: Math.cos(particle.angle) * particle.distance,
                      y: Math.sin(particle.angle) * particle.distance,
                      opacity: 0,
                      scale: 0.3,
                    }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeOut" 
                    }}
                    className="absolute rounded-full"
                    style={{
                      width: particle.size,
                      height: particle.size,
                      backgroundColor: firework.color,
                      boxShadow: `0 0 ${particle.size * 2}px ${firework.color}`,
                    }}
                  />
                ))}
                {/* Center burst */}
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundColor: firework.color,
                    boxShadow: `0 0 20px 10px ${firework.color}`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ rotateY: -10 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={tetBanner}
                alt="Thông báo lịch nghỉ Tết Bính Ngọ 2026"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Sparkle decorations */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -top-6 -left-6 w-12 h-12 text-yellow-400"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-4 -right-4 w-10 h-10 text-yellow-400 text-2xl"
            >
              🎆
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
