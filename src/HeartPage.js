import React from "react";
import { motion } from "framer-motion";
import "./HeartPage.css";

function HeartPage() {
  return (
    <div className="heart-container">
      <motion.div
        className="heart-3d"
        animate={{ scale: [1, 1.2, 1], rotateY: [0, 20, -20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ❤️
      </motion.div>

      <motion.h1
        className="valentine-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Chúc mừng Valentine của chúng ta, Đậu và Nai 💕
      </motion.h1>
    </div>
  );
}

export default HeartPage;
