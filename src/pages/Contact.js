import React from "react";
import ContactForm from "../components/ContactForm";
import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";
import GitHub from "../components/GitHub";

const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 300,
        },
    };
    return (
        <main>
            <Mouse />
            <motion.div
                className="contact"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
                transition={{ duration: 0.4 }}
            >
                <Navigation />
                <GitHub />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>6 rue de la résistance</p>
                            <p>21000 DIJON</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard
                                text="0634035684"
                                className="hover"
                            >
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("Téléphone copié !")}
                                >
                                    06 34 03 56 84
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard
                                text="romain.cerezo@icloud.com"
                                className="hover"
                            >
                                <p
                                    style={{ cursor: "pointer" }}
                                    className="clipboard"
                                    onClick={() => alert("Email copié !")}
                                >
                                    romain.cerezo@icloud.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="credits">
                        <p>Romain Cerezo - 2022</p>
                    </div>
                </div>
                <Buttons left={"/projet-4"} />
            </motion.div>
        </main>
    );
};

export default Contact;
