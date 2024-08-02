const reasons = [
    "your kindness and compassion inspire me every day.",
    "you have an amazing sense of humor that always makes me laugh.",
    "your intelligence and curiosity keep me constantly learning.",
    "you are incredibly supportive and always believe in me.",
    "your smile brightens my day and makes everything better.",
    "you are my best friend, and I love sharing my life with you.",
    "you have a unique way of seeing the world that I adore.",
    "your creativity and passion for life are contagious.",
    "you make even the simplest moments special and memorable.",
    "you love me for who I am, and I love you for who you are.",
    "your beauty, both inside and out, takes my breath away.",
    "you have a heart of gold and always put others before yourself.",
    "your hugs and cuddles make me feel safe and loved.",
    "you have a beautiful smile that lights me up.",
    "you are always there for me, no matter what.",
    "your laughter is infectious and brings so much happiness.",
    "you have a great sense of style and always look stunning.",
    "you are my rock and anchor in this crazy world.",
    "your love and support make every day worth living."
];

document.getElementById("reasonForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const passcode = document.getElementById("passcode").value.trim();
    const number = parseInt(document.getElementById("reasonNumber").value.trim());

    if (passcode === "baby") {
        if (number >= 1 && number <= 19) {
            document.getElementById("result").innerText = `reason ${number}: ${reasons[number - 1]}`;
        } else {
            document.getElementById("result").innerText = "please enter a number between 1 and 19.";
        }
    } else {
        document.getElementById("result").innerText = "incorrect passcode. please try again.";
    }
});
