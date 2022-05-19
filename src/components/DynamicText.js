import React, { useEffect } from "react";

const DynamicText = () => {
    useEffect(() => {
        const target = document.getElementById("text-target");
        let array = ["simple", "clear", "smart", "strong"];
        let wordIndex = 0;
        let letterIndex = 0;

        function createLetter() {
            const letter = document.createElement("span");
            target.appendChild(letter);

            letter.classList.add("letter");
            letter.style.opacity = "0";
            letter.style.animation = "anim 6s ease forwards";
            letter.textContent = array[wordIndex][letterIndex];

            setTimeout(() => {
                letter.remove();
            }, 2500);
        }

        function loop() {
            setTimeout(() => {
                if (letterIndex < array[wordIndex].length) {
                    createLetter();
                    letterIndex++;
                    loop();
                } else if (wordIndex === array.length - 1) {
                    wordIndex = 0;
                    loop();
                } else {
                    letterIndex = 0;
                    wordIndex++;
                    setTimeout(loop, 2000);
                }
            }, 80);
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
