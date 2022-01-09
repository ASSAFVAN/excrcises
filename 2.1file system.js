const fs = require("fs");

//1. Create a new txt file using the same fs module method we have
// learned before.

fs.writeFileSync("test.txt", "this is a test file");

//2. Create a copy of the newly created txt file using a method from
// the fs module.

fs.copyFileSync("test.txt", "secondfile.txt");

//3. Rename one of the files using a method from the fs module.

fs.renameSync("test.txt", "newtest.txt");

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

const filenames = fs.readdirSync(__dirname);
filenames.forEach((file) => {
  console.log(file);
});

// 5. Find out and implement another method for the fs module.
// creating new directory
fs.mkdirSync("testdir");
