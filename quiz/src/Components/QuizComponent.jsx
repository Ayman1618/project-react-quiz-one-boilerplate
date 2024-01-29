import React from "react";

export default function QuizComponent() {
    return (
        <div>
            <div className="question-box">
                <div className="textinbox">
                    <h3>Question</h3>
                    <p>1 of 15</p>
                    <p>Which is the only mammal that can jump?</p>
                </div>

                <div className="options">
                    <button id="option">Dog</button>
                    <button id="option">Elephant</button>
                    <button id="option">Goat</button>
                    <button id="option">Lion</button>
                </div>

                <div className="page-turn-buttons">
                    <button>Previous</button>
                    <button>Next</button>
                    <button>Quit</button>
                </div>
                
            </div>

        </div>
    );
}





