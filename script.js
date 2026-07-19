// Welcome Message
function showMessage() {
    alert("Welcome to the Smart Community Health Monitoring and Early Warning System!");
}

// Animated Counter Function
function animateCounter(id, target, speed) {
    let count = 0;
    const element = document.getElementById(id);

    const interval = setInterval(() => {
        count++;

        element.innerHTML = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, speed);
}

// Start Counters
animateCounter("patients", 275, 15);
animateCounter("villages", 42, 50);
animateCounter("alerts", 8, 200);

// Current Date and Time
function updateDateTime() {
    const now = new Date();
    console.log("Current Time:", now.toLocaleString());
}

setInterval(updateDateTime, 1000);

// Risk Prediction
function predictRisk(waterQuality) {

    if (waterQuality >= 80) {
        return "LOW";
    }

    else if (waterQuality >= 50) {
        return "MEDIUM";
    }

    else {
        return "HIGH";
    }
}

// Example Prediction
let waterQuality = 45;

console.log("Water Quality:", waterQuality);
console.log("Disease Risk:", predictRisk(waterQuality));

// Health Tips
const tips = [
    "Drink boiled or filtered water.",
    "Wash your hands before meals.",
    "Keep surroundings clean.",
    "Use toilets and maintain sanitation.",
    "Seek medical help if symptoms appear."
];

console.log("Health Tips");
tips.forEach((tip, index) => {
    console.log((index + 1) + ". " + tip);
});

// Simulated Disease Data
const diseaseData = [
    { village: "Village A", patients: 20 },
    { village: "Village B", patients: 35 },
    { village: "Village C", patients: 15 },
    { village: "Village D", patients: 42 }
];

console