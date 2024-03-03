// Cannot read properties of null (reading 'classList') in JS

console.log('bobbyhadz.com');

const box = document.getElementById('box');
console.log(box); // 👉️ div#box

// ✅ works
box.classList.add('bg-green-400');
