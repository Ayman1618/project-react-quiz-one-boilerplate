import { Component } from "react";
import './ResultComponent.css'


export default class ResultComponent extends Component {
    render() {
        return (
            <>
                <div className="result-box">
                    <h1 className="result-text">Result</h1>

                    <div className="resultPage-container">

                        <div className="statement">
                            <h2><strong>You Need More Practice!</strong></h2>
                        </div>

                        <div className="score">
                            <h1><strong>Your score is 20%</strong></h1>
                        </div>

                        <div className="questions">
                            <div className="noOfQuestions">
                                <div>
                                    <h3><strong>Total questions</strong></h3>
                                </div>

                                <div>
                                    <h3><strong>15</strong></h3>
                                </div>
                            </div>

                            <div className="noOfQuestions">
                                <div>
                                    <h3><strong>Attempted questions</strong></h3>
                                </div>

                                <div>
                                    <h3><strong>9</strong></h3>
                                </div>
                            </div>

                            <div className="noOfQuestions">
                                <div>
                                    <h3><strong>Correct answers</strong></h3>
                                </div>

                                <div>
                                    <h3><strong>3</strong></h3>
                                </div>
                            </div>

                            <div className="noOfQuestions">
                                <div>
                                    <h3><strong>Wrong answers</strong></h3>
                                </div>

                                <div>
                                    <h3><strong>6</strong></h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="buttonss">
                        <div>
                            <button className="play-btn">Play Again</button>
                        </div>

                        <div>
                            <button className="back-btn">Back to home</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

