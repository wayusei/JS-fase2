async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 'Hello World';
  }
  
  function log(value) {
    // Code goes here...
    wait().then(print => console.log(print))
  }
  
  log()