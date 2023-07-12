import React from "react";
import { motion } from "framer-motion";

const PoweredByText = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="powered-by-text absolute text-black justify-end md:ml-20 md:bottom-5 md:left-0 font-Display md:text-sm md:mt-0 bottom-5 text-xs left-1/2 transform md:translate-x-0 -translate-x-1/2 text-center"
        >
            <p>powered by <a href="https://stability.ai/" target="_blank" rel="noopener noreferrer"><span className="text-stable-purple font-normal hover:text-darkorange transition-colors duration-500 ">Stable Diffusion V1.5</span></a></p>
        </motion.div>
    );
}

export default PoweredByText;