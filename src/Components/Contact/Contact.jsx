import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyClick = (text) => {
    copyToClipboard(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      setShowPopup(false);
    }, 2000);
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <motion.div
      className="mt-96 bg-[#e3f6f5] dark:bg-[#d4d8f0] rounded-xl px-10 py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 30 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      whileInView={{
        opacity: 1,
        y: 20,
      }}
    >
      <motion.h1 className="text-center text-xl pb-4 text-paragraph">Contact Me</motion.h1>
      <h1 className="text-center font-extrabold text-3xl text-paragraph dark:text-paragraph">Got a Project? Lets Talk!</h1>
      <div className="flex flex-col items-center justify-center pt-12">
        <img src="/src/assets/mail1.png" alt="mail" className="w-12" />
        <div>
          <motion.button
            onClick={() => handleCopyClick("blablabla@gmail.com")}
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
            onTouchStart={handlePopupToggle}
            onTouchEnd={() => {}}
            className="font-semibold text-lg text-paragraph relative"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            blablabla@gmail.com
            {showPopup && (
              <div>
                <motion.div className="border rounded-xl border-paragraph text-paragraph py-1 absolute left-0 right-0" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <button onClick={() => handleCopyClick("blablabla@gmail.com")}>{isCopied ? "Copied" : "Click to Copy"}</button>
                </motion.div>
              </div>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
