import fs from 'fs'   


// fs.writeFile("sample.txt", "welcome", (err) => {
//   if (err) {
//     console.log("Error writing file:", err);
//   } else {
//     console.log("File created successfully!");
//   }
// });



fs.appendFile("sample.txt", "\nWelcome to Node.js!", (err) => {
  if (err) {
    console.log("Error appending file:", err);
  } else {
    console.log("Data appended successfully!");
  }
});
