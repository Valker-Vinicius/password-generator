let possibilities = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let splitPossibilities = possibilities.split('');
let password = '';

for (let i = 0; i <= 8; i++) {
  password += splitPossibilities[Math.floor(Math.random() * splitPossibilities.length)];
};

console.log(password);
