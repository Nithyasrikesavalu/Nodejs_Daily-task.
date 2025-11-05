const Seanse = [
  "The sound of an airplane engine breaks the silence.",
  "A plane flies high above the clouds. Sunlight shines on its wings.",
  "Inside, people look worried. Something feels wrong.",
  "In the cockpit, the pilot calls the control tower. “We need to land. We’re low on fuel.”",
  "The reply comes — 'Permission denied. Wait for instructions.'",
  "The pilot tries again, his voice tense. Still, no permission to land.",
  "The plane keeps circling in the sky. The fuel is almost empty.",
  "A child cries. A mother prays. Flight attendants try to stay calm.",
  "Maara sits quietly among them. His eyes show anger and pain.",
  "The pilot speaks again — “Please stay calm. We’re waiting to land.”",
  "The engines start to slow down. The plane shakes. Lights flicker.",
  "Everyone holds their breath.",
  ".....",
  "The engine sound fades away.",
  "SOORARAI POTTRU."
];

// settime out
// Seanse.forEach((line, i) => {
//   setTimeout(() => {
//     console.log(line);
//   }, i * 2000); 
// });
  
// settinterval

// Seanse.forEach((e,i) => {
//      setInterval(() => {
//         console.log(e)
//      }, 3000);
// });


//setinterval

let i = 0;

const interval = setInterval(() => {
  console.log(Seanse[i]);
  i++;
  if (i === Seanse.length) {
    clearInterval(interval);
  }
}, 2000);