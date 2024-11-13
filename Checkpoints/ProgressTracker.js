import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import './ProgressTracker.css';

const ProgressTracker = ({ tasks = [] }) => {
    const [checkedTasks, setCheckedTasks] = useState(new Array(tasks.length).fill(false));
    const router = useRouter();

    // Handler for task completion
    const handleCheck = (index) => {
        const updatedCheckedTasks = [...checkedTasks];
        updatedCheckedTasks[index] = !updatedCheckedTasks[index]; // Toggle the checked state
        setCheckedTasks(updatedCheckedTasks);
    };

    // Navigate to the quiz when "Quiz" button is clicked
    const handleQuizButton = () => {
        if (checkedTasks.every(checked => checked)) {
            // Navigate to the quiz page
            router.push('/IphoneQuiz');
        } else {
            alert("Please complete all tasks to proceed!");
        }
    };

    return (
        <div className="progress-tracker">
            <h2>Progress Tracker</h2>
            <p>This is a progress tracker. Complete the tasks and take the quiz to proceed to the next step.</p>
            {tasks.length === 0 ? (
                <p className="loading-message">Loading tasks...</p>
            ) : (
                tasks.map((task, index) => (
                    <div key={index} className="task">
                        <input
                            type="checkbox"
                            checked={checkedTasks[index]}
                            onChange={() => handleCheck(index)}
                        />
                        <span>{task}</span>
                    </div>
                ))
            )}
            {checkedTasks.every(checked => checked) && (
                <>
                    <p className="completion-message">Here is a quiz to show that you passed all the understanding of using an iPhone.</p>
                    <button className="quiz-button" onClick={handleQuizButton}>
                        Quiz
                    </button>
                </>
            )}
        </div>
    );
};

export default ProgressTracker;
