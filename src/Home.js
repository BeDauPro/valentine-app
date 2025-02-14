import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const moveButton = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setButtonPos({ x: newX, y: newY });
  };

  return (
    <div className="home-container">
        <img 
              src="https://i.pinimg.com/564x/a4/2b/9d/a42b9d1b96d14521c8ef2f90ab9a4f6c.jpg" 
              alt="thacmac" 
              className="thacmac" 
            />
      <h1>Đây là Valentine thứ mấy của chúng ta nhuỷ?</h1>
      <button className="btn" onClick={() => setShowModal(true)}>Thứ 2</button>
      <button className="btn" onClick={() => navigate("/heart")}>Thứ 3</button>

      {showModal && (
        <motion.div 
          className="modal"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          <div className="modal-content">
            <img 
              src="https://cdn2.fptshop.com.vn/unsafe/meme_bat_ngo_1_332d4b5fea.jpg" 
              alt="Ối dồi ôi" 
              className="meme-img" 
            />
            <p className="meme-text">ỐI DỒI ÔI! Sai bét🤣</p>

            <motion.button
              className="btn close-btn"
              onHoverStart={moveButton}
              onClick={() => setShowModal(false)}
              animate={{ x: buttonPos.x, y: buttonPos.y }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Đừng hòng thoát nhé
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
