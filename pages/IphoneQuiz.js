import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import the router for navigation
import './Quiz.css';

const questions = [
    {
        question: "What is the function of the Home button on an iPhone?",
        options: [
            "Take a photo",
            "Go to the home screen",
            "Adjust volume",
            "Open the app switcher"
        ],
        answer: "Go to the home screen"
    },
    {
        question: "Which gesture is used to unlock an iPhone?",
        options: [
            "Swipe up",
            "Double-tap",
            "Press the Home button",
            "Swipe down"
        ],
        answer: "Swipe up"
    },
    {
        question: "What app is used for sending text messages?",
        options: [
            "Mail",
            "Messages",
            "Safari",
            "Photos"
        ],
        answer: "Messages"
    },
    // New questions
    {
        question: "What does the iPhone's 'Do Not Disturb' mode do?",
        options: [
            "Silences calls and notifications",
            "Turns off the device",
            "Increases battery life",
            "Disables Wi-Fi"
        ],
        answer: "Silences calls and notifications"
    },
    {
        question: "Which app would you use to take a screenshot on an iPhone?",
        options: [
            "Notes",
            "Photos",
            "Settings",
            "There is a specific screenshot button combination"
        ],
        answer: "There is a specific screenshot button combination"
    },
    {
        question: "What does Siri do?",
        options: [
            "Helps with setting alarms",
            "Acts as a virtual assistant",
            "Provides weather updates",
            "All of the above"
        ],
        answer: "All of the above"
    },
    // Adding 20 more questions
    {
        question: "How can you update the iOS on your iPhone?",
        options: [
            "Through Settings > General > Software Update",
            "By connecting to iTunes",
            "You can't update iOS",
            "Only through Apple support"
        ],
        answer: "Through Settings > General > Software Update"
    },
    {
        question: "What is the purpose of the AirDrop feature?",
        options: [
            "To transfer files between Apple devices wirelessly",
            "To share your location",
            "To backup your data",
            "To access iCloud"
        ],
        answer: "To transfer files between Apple devices wirelessly"
    },
    {
        question: "Which feature allows you to locate your lost iPhone?",
        options: [
            "Find My iPhone",
            "iCloud",
            "AirDrop",
            "Siri"
        ],
        answer: "Find My iPhone"
    },
    {
        question: "What does the iPhone's AssistiveTouch feature provide?",
        options: [
            "Accessibility shortcuts",
            "More screen brightness",
            "Enhanced battery life",
            "Faster internet"
        ],
        answer: "Accessibility shortcuts"
    },
    {
        question: "How can you customize your iPhone's home screen?",
        options: [
            "By rearranging apps and creating folders",
            "Only through iTunes",
            "You can't customize it",
            "By downloading new themes"
        ],
        answer: "By rearranging apps and creating folders"
    },
    {
        question: "What is the maximum storage capacity available on the latest iPhone models?",
        options: [
            "128 GB",
            "256 GB",
            "512 GB",
            "1 TB"
        ],
        answer: "1 TB"
    },
    {
        question: "Which of the following can you do with Siri?",
        options: [
            "Set reminders",
            "Send messages",
            "Play music",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What is the purpose of the App Store?",
        options: [
            "To purchase music",
            "To download apps and games",
            "To buy books",
            "To access social media"
        ],
        answer: "To download apps and games"
    },
    {
        question: "How can you activate Siri?",
        options: [
            "Press and hold the Home button",
            "Say 'Hey Siri'",
            "Use the Control Center",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What does the Face ID feature do?",
        options: [
            "Unlocks your iPhone using facial recognition",
            "Takes selfies",
            "Records video calls",
            "Enhances photo quality"
        ],
        answer: "Unlocks your iPhone using facial recognition"
    },
    {
        question: "How do you take a photo using the camera app?",
        options: [
            "By pressing the volume up button",
            "By tapping the shutter button on the screen",
            "By saying 'Take a photo' to Siri",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What is iCloud used for?",
        options: [
            "To back up your iPhone data",
            "To store photos and documents",
            "To sync your data across devices",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which feature helps you save battery life?",
        options: [
            "Low Power Mode",
            "Airplane Mode",
            "Turning off background app refresh",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What should you do if your iPhone is running slow?",
        options: [
            "Restart the device",
            "Delete unused apps",
            "Clear cache and data",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "How do you access the Control Center?",
        options: [
            "Swipe down from the top right corner",
            "Swipe up from the bottom of the screen",
            "Press the Home button",
            "Open Settings"
        ],
        answer: "Swipe down from the top right corner"
    },
    {
        question: "What is the main purpose of the iPhone's settings app?",
        options: [
            "To play music",
            "To adjust device settings",
            "To manage apps",
            "To make calls"
        ],
        answer: "To adjust device settings"
    },
    {
        question: "What does the 'Back Tap' feature allow you to do?",
        options: [
            "Take screenshots with a double tap",
            "Access shortcuts with a triple tap",
            "Both A and B",
            "None of the above"
        ],
        answer: "Both A and B"
    },
    {
        question: "How can you share your Wi-Fi password with another iPhone?",
        options: [
            "Using AirDrop",
            "Manually entering it",
            "Through iCloud",
            "You can't share Wi-Fi passwords"
        ],
        answer: "Using AirDrop"
    },
    {
        question: "What does the 'Screen Time' feature do?",
        options: [
            "Tracks app usage",
            "Limits time spent on apps",
            "Provides reports on usage habits",
            "All of the above"
        ],
        answer: "All of the above"
    },
];

const IphoneQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [missedQuestions, setMissedQuestions] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // State for tracking answer correctness
    const router = useRouter();

    const handleAnswerOptionClick = (option) => {
        const isCorrect = option === questions[currentQuestionIndex].answer;

        if (isCorrect) {
            setScore(score + 1);
            setIsAnswerCorrect(true); // Correct answer feedback
            const nextQuestion = currentQuestionIndex + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestionIndex(nextQuestion);
                setIsAnswerCorrect(null); // Reset correctness for the next question
            } else {
                setIsQuizFinished(true);
            }
        } else {
            // Only add to missedQuestions if it's not already present
            if (!missedQuestions.some(q => q.question === questions[currentQuestionIndex].question)) {
                setMissedQuestions((prev) => [...prev, questions[currentQuestionIndex]]);
            }
            setIsAnswerCorrect(false); // Incorrect answer feedback
        }
    };

    const handleRetakeQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsQuizFinished(false);
        setMissedQuestions([]); // Reset missed questions
        setIsAnswerCorrect(null); // Reset correctness state
    };

    const handleRedirectToIphone = () => {
        router.push('/iphone');
    };

    return (
        <div className="quiz-container">
            <button onClick={handleRedirectToIphone} className="main-page-button">
                Back to Main Page
            </button>
            {isQuizFinished ? (
                <div className="quiz-result">
                    <h2>Quiz Finished!</h2>
                    {missedQuestions.length === 0 ? (
                        <div>
                            <p>Congratulations! You've got it all correct! 🎉</p>
                            <button onClick={handleRedirectToIphone} className="success-button">
                                Go to iPhone Page
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p>Test Your Knowlegdge Again!.</p>
                            <button onClick={handleRetakeQuiz} className="retake-quiz-button">
                                Retake 
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div className="quiz-options">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    {isAnswerCorrect === false && (
                        <p className="error-message">Incorrect! Please try again.</p> // Display error message
                    )}
                </div>
            )}
        </div>
    );
};

export default IphoneQuiz;
