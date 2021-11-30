// function are synchronous and run in order from first console log to next.
function testFunc() {
  console.log("A");

  // setTimeout is a async function and awaits other callback functions
  setTimeout(function display() {
    console.log("B");
  }, 0);

  console.log("C");
}

// Calls the testFunc function to run console logs
testFunc();
