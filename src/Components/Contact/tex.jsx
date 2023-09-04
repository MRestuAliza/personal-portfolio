import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleCopyClick = (text) => {
    copyToClipboard(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Mengubah status "Copied" kembali ke "Copy" setelah 2 detik
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <div className="mt-56 bg-[#e3f6f5] dark:bg-[#d4d8f0] rounded-xl px-10 py-24">
      <div>
        <h1 className="text-center text-xl pb-4 text-paragraph">Contact Me</h1>
        <h1 className="text-center font-extrabold text-3xl text-paragraph dark:text-paragraph">Got a Project? Lets Talk!</h1>
        <div className="flex flex-col items-center justify-center pt-12">
          <img src="/src/assets/mail1.png" alt="mail" className="w-12" />
          <div>
            <motion.button
              onClick={() => handleCopyClick("blablabla@gmail.com")}
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
              className="font-semibold text-lg text-paragraph"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              blablabla@gmail.com
              {showPopup && (
                <motion.div className="border rounded-xl border-paragraph absolute text-paragraph py-2 px-2 mt-2 mx-auto left-0 right-0 w-full" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <button onClick={() => handleCopyClick("blablabla@gmail.com")}>{isCopied ? "Copied" : "Copy to Clipboard"}</button>
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
