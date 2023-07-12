import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaBehance, FaLinkedinIn, FaSpotify, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        >
            <div className="Icons absolute text-black md:flex md:flex-row md:space-x-5 justify-end md:mr-20 bottom-5 right-0 mr-6 flex flex-col space-y-2 md:space-y-0">

                <a href="https://www.instagram.com/lakshaybhushan" target="_blank" rel="noopener noreferrer" className=" hover:text-orange-500 transition-color duration-500">
                    <FaInstagram size={20} />
                </a>

                <a href="https://twitter.com/bhushanlakshay" target="_blank" rel="noopener noreferrer"className=" hover:text-orange-500 transition-color duration-500">
                    <FaTwitter size={20} />
                </a>
                <a href="https://github.com/lakshaybhushan" target="_blank" rel="noopener noreferrer"className=" hover:text-orange-500 transition-color duration-500">
                    <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/lakshaybhushan/" target="_blank" rel="noopener noreferrer"className=" hover:text-orange-500 transition-color duration-500">
                    <FaLinkedinIn size={20} />
                </a>
                <a href="https://www.behance.net/lakshaybhushan" target="_blank" rel="noopener noreferrer"className=" hover:text-orange-500 transition-color duration-500">
                    <FaBehance size={20} />
                </a>
                <a href="https://open.spotify.com/user/amcdf5xiittevf5gl1ecjqfyu" target="_blank" rel="noopener noreferrer"className=" hover:text-orange-500 transition-color duration-500">
                    <FaSpotify size={20} />
                </a>


            </div>

        </motion.div>
    );

};

export default SocialIcons;