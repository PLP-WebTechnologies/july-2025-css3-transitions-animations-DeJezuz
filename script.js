// Part 2: Functions with parameters and return values

function calculateScale(factor) {
  return factor * 1.5;
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Scope demonstration
let globalCounter = 0;

function incrementCounter() {
  let localIncrement = 1;
  globalCounter += localIncrement;
  console.log("Global Counter:", globalCounter);
}

// Part 3: JS triggering CSS animations

function triggerBoxAnimation() {
  const box = document.getElementById("animateBox");
  toggleClass(box, "animate");
  incrementCounter();
}

function toggleModal() {
  const modal = document.getElementById("modal");
  toggleClass(modal, "show");
}
