const hre = require("hardhat");

const main = async () => {
  // deploy the contract locally
  const todoContractFactory = await hre.ethers.getContractFactory("TodoContract");
  const todoContract = await todoContractFactory.deploy();
  await todoContract.deployed();
  console.log("Contract deployed to:", todoContract.address);

  let todoTask = 'Go to the park'; // declare mock todo task

  let txn = await todoContract.addTodo(todoTask); // create todo by calling addTodo()
  let wait = await txn.wait();
  console.log("NEW TODO CREATED:", wait.events[0].event, wait.events[0].args);

  let todoId = wait.events[0].args.todoId; // retrieve todo ID
  console.log("TODO ID:", todoId);


  txn = await todoContract.toggle(todoId); // toggle isCompleted status
  wait = await txn.wait();
  console.log("TODO COMPLETED STATUS TOGGLED:", wait.events[0].event, wait.events[0].args);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
