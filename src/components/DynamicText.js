import React, { useEffect } from "react";

const DynamicText = () => {
    useEffect(() => {
        const target = document.getElementById("text-target");
        let array = ["determiné", "optimiste", "aventurier", "curieux"];
        let wordIndex = 0;
        let letterIndex = 0;

        function createLetter() {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.textContent = array[wordIndex][letterIndex];
            // letter.classList.add("letter");
            // letter.style.opacity = "0";

            setTimeout(() => {
                letter.remove();
            }, 2700);
        }

        function loop() {
            setTimeout(() => {
                if (wordIndex >= array.length) {
                    wordIndex = 0;
                    letterIndex = 0;
                }
                if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else {
                    wordIndex++;
                    letterIndex = 0;
                    setTimeout(() => {
                        loop();
                    }, 2800);
                }
            }, 50);
        }
        loop();
    }, []);

    return (
        <span className="dynamic-text">
            <span>Je suis</span>
            <span id="text-target"></span>
        </span>
    );
};

export default DynamicText;
