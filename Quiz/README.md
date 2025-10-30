# Quiz Game

## Overview
This project is a web-based Quiz Game designed to test knowledge in HTML, CSS, and JavaScript. Users are presented with multiple-choice questions, a timer, and a score system. The project demonstrates the use of DOM manipulation, event handling, timers, and basic animations, making it a great learning resource for beginners and intermediate developers.



## File Structure

```bash
Quiz/
├── index.html       # Main HTML file
├── style.css        # CSS styles
├── script.js        # JavaScript functionality
├── questions.js     # Quiz questions data
└── README.md        # Project documentation

```


## Project Features
- **Multiple Screens:** Start screen, quiz screen, and result screen.
- **Dynamic Question Handling:** Questions are loaded from `questions.js` and rendered dynamically.
- **Timer:** Each question has a countdown timer to add challenge.
- **Score Tracking:** Correct answers increase score; final score is displayed at the end.
- **Progress Bar:** Visual representation of quiz progress.
- **Responsive Design:** Works on desktop and mobile screens.
- **Animations:** Smooth transitions for buttons and screens.

## Technical Details

### Question Handling Logic
1. Questions are stored in `questions.js` as an array of objects, each containing:
   - `question`: Text of the question
   - `answers`: Array of possible answers with `text` and `correct` properties
2. `script.js` handles the quiz flow:
   - `startQuiz()` initializes variables and shows the first question.
   - `showQuestion()` dynamically creates answer buttons and updates question info.
   - `selectAnswer()` handles user input, checks correctness, updates score, and highlights correct/incorrect answers.
   - `nextQuestion()` moves to the next question or shows results if all questions are answered.
   - `showResults()` calculates the score percentage and displays an appropriate message.

### Timer Functionality
- Each question has a 10-second timer.
- Timer updates every second using `setInterval`.
- If time runs out, correct answer is highlighted automatically and quiz proceeds to the next question.

### DOM Manipulation & Event Handling
- Elements are selected using `getElementById`.
- Event listeners handle start, restart, and answer selection actions.
- Dynamic updates to content and styling provide feedback for correct/incorrect answers.

### CSS & Styling
- Modern fonts: `Rajdhani` and `Roboto Mono`.
- Gradient backgrounds and semi-transparent containers.
- Button hover effects, correct/incorrect answer animations.
- Smooth transitions for screens and progress bar.

## Learning Opportunities
- **JavaScript:**
  - DOM manipulation and dynamic content rendering.
  - Event listeners and handling user interactions.
  - Timers with `setInterval` and `clearInterval`.
  - Conditional logic and state management for quizzes.
- **CSS:**
  - Responsive design and media queries.
  - Flexbox layout for answers and quiz info.
  - Animations and transitions for interactive elements.
- **HTML:**
  - Semantic structure for multiple screens.
  - Proper use of headings, buttons, and containers.
- **Project Expansion Ideas:**
  - Add different categories of quizzes.
  - Implement local storage to save high scores.
  - Add sound effects or background music.
  - Add more complex animations for buttons and progress bar.
  - Fetch questions dynamically from an API.

## How to Run
1. Clone the repository.
2. Open `index.html` in a web browser.
3. Click "Launch Quiz" to start and answer questions.
4. View results and restart the quiz if desired.


## Quiz Flow

```mermaid
flowchart TD
    A[Start Quiz] --> B[Start Screen]
    B -->|Click "Launch Quiz"| C[Quiz Screen]
    C --> D[Load Current Question]
    D --> E[Start 10-second Timer]
    E --> F{User selects answer?}
    F -->|Yes| G[Check correctness & update score]
    F -->|No| H[Timer ends: highlight correct answer]
    G --> I[Highlight correct/incorrect buttons]
    H --> I
    I --> J{More questions?}
    J -->|Yes| D
    J -->|No| K[Result Screen]
    K --> L[Display score & message]
    L --> M[Option to restart]
```