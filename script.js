// --- Part 1: Variable Declarations and Conditionals ---
    // Variable Declarations
    const userRole = "admin"; // Using const for variables that won't be reassigned
    let isLoggedIn = true;   // Using let for variables that might change
    const hourOfDay = new Date().getHours();
    let greetingMessage;

    // Conditionals
    if (isLoggedIn) {
        if (userRole === "admin") {
            greetingMessage = "Welcome back, Administrator!";
        } else if (userRole === "editor") {
            greetingMessage = "Hello, Editor!";
        } else {
            greetingMessage = "Welcome, User!";
        }
    } else {
        greetingMessage = "Please log in to access features.";
    }

    console.log("Current user status:", greetingMessage);

    // Another conditional based on time of day
    const timeOfDayElement = document.getElementById('conditional-output');
    if (hourOfDay < 12) {
        timeOfDayElement.textContent = `Good morning! It's ${hourOfDay} AM. ${greetingMessage}`;
    } else if (hourOfDay < 18) {
        timeOfDayElement.textContent = `Good afternoon! It's ${hourOfDay - 12} PM. ${greetingMessage}`;
    } else {
        timeOfDayElement.textContent = `Good evening! It's ${hourOfDay - 12} PM. ${greetingMessage}`;
    }

    const checkStatusBtn = document.getElementById('check-status-btn');
    checkStatusBtn.addEventListener('click', () => {
        isLoggedIn = !isLoggedIn; // Toggle login status
        const currentStatus = isLoggedIn ? "You are now logged in." : "You are now logged out.";
        alert(currentStatus + " Reload to see conditional message update.");
    });


    // --- Part 2: At least 2 Custom Functions ---

    /**
     * Calculates the sum of two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of a and b.
     */
    function addNumbers(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.error("addNumbers requires two numbers as arguments.");
            return NaN; // Not a Number
        }
        return a + b;
    }
    const createGreeting = (name, salutation = "Hello") => { // Arrow function example
        if (!name || typeof name !== 'string') {
            return `${salutation}, anonymous user!`;
        }
        return `${salutation}, ${name}! Welcome to the platform.`;
    };

    // Function calls and DOM interaction
    const num1Input = document.getElementById('num1-input');
    const num2Input = document.getElementById('num2-input');
    const calculateSumBtn = document.getElementById('calculate-sum-btn');
    const sumResultSpan = document.getElementById('sum-result');

    calculateSumBtn.addEventListener('click', () => {
        const number1 = parseFloat(num1Input.value); // Convert string input to float
        const number2 = parseFloat(num2Input.value);

        if (!isNaN(number1) && !isNaN(number2)) {
            const sum = addNumbers(number1, number2);
            sumResultSpan.textContent = sum;
            console.log(`Sum of ${number1} and ${number2} is: ${sum}`);
        } else {
            sumResultSpan.textContent = "Invalid input";
            console.warn("Please enter valid numbers for sum calculation.");
        }
    });

    const greetBtn = document.getElementById('greet-btn');
    const greetingOutputP = document.getElementById('greeting-output');

    greetBtn.addEventListener('click', () => {
        const userName = prompt("What's your name?"); // Using prompt for simple input
        const customGreeting = createGreeting(userName || "Guest", "Hi there"); // "Guest" if prompt is cancelled
        greetingOutputP.textContent = customGreeting;
        console.log(customGreeting);
    });


    // --- Part 3: At least 2 Loop Examples ---

    const loopForList = document.getElementById('loop-list-for');
    const loopWhileOutput = document.getElementById('loop-output-while');
    const runLoopsBtn = document.getElementById('run-loops-btn');

    runLoopsBtn.addEventListener('click', () => {
        // Clear previous loop results
        loopForList.innerHTML = '<li>For loop items will appear here:</li>';
        loopWhileOutput.textContent = 'While loop message will appear here.';

        // For Loop Example
        const fruits = ["Apple", "Banana", "Cherry", "Orange", "Grape"];
        console.log("For Loop: Iterating through fruits array:");
        for (let i = 0; i < fruits.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Fruit #${i + 1}: ${fruits[i]}`;
            loopForList.appendChild(listItem);
            console.log(fruits[i]);
        }

        // While Loop Example
        let count = 0;
        let whileMessage = "While Loop: Counting up to 5: ";
        console.log("While Loop: Counting up to 5:");
        while (count < 5) {
            whileMessage += `${count + 1} `;
            console.log(`Count is: ${count + 1}`);
            count++;
        }
        loopWhileOutput.textContent = whileMessage;
    });


    // --- Part 4: At least 3 DOM Interactions ---
    console.log("\n--- Part 4: DOM Interactions ---");

    // 1. Event Listener for Click (on a div)
    const clickableBox = document.getElementById('clickable-box');
    clickableBox.addEventListener('click', () => {
        clickableBox.textContent = "Clicked!";
        clickableBox.classList.add('clicked');
        setTimeout(() => { // Reset after 1 second
            clickableBox.textContent = "Click Me!";
            clickableBox.classList.remove('clicked');
        }, 1000);
        console.log("Clickable box was clicked!");
    });

    // 2. Event Listener for Input Change (on an input field)
    const dynamicTextInput = document.getElementById('dynamic-text-input');
    const dynamicTextDisplay = document.getElementById('dynamic-text-display');

    dynamicTextInput.addEventListener('input', (event) => {
        // Update the display paragraph with the current value of the input
        dynamicTextDisplay.textContent = `You typed: ${event.target.value}`;
        console.log("Input value changed:", event.target.value);
    });

    // 3. Modifying Element Styles and Classes (on button click)
    const toggleColorBtn = document.getElementById('toggle-color-btn');
    const mainSection = document.querySelector('main'); // Target the main element

    toggleColorBtn.addEventListener('click', () => {
        // Toggle a CSS class to change background color
        mainSection.classList.toggle('highlight');
        if (mainSection.classList.contains('highlight')) {
            console.log("Main section highlighted.");
        } else {
            console.log("Main section highlight removed.");
        }

    });