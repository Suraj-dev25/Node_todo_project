import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1. Enter Your Task");
  console.log("2. View Your Task");
  console.log("3. Exit");
  rl.question("Choose your option:", handletask);
};

const handletask = (option) => {
  if (option === "1") {
    rl.question("Enter Your Task:", (task) => {
      todos.push(task);
      console.log("Task Added Sucessfully:", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\n Your todo List:");
    todos.map((task, index) => {
      //u can use map or foreach method
      console.log(`${index + 1}.${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Exit From Todo list!");
    rl.close();
  } else {
    console.log("Invalid Option. Check Number");
    showMenu();
  }
};

showMenu();
