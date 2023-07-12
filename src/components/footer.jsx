import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="footer-body font-Display absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center md:text-base text-sm mb-6 md:mb-0">

            <p>made with :) by <a href="https://github.com/lakshaybhushan" target="_blank" rel="noopener noreferrer" className=" text-darkorange underline decoration-3 hover:opacity-80 transition-opacity duration-500">lakshaybhushan</a></p>

        </motion.div>
    );
};

export default Footer;

