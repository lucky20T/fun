const box = document.getElementById("moving-box");
const gameArea = document.getElementById("game-area");

// Variables to track dragging state
let isDragging = false;

// Event listener for mouse or touch start
box.addEventListener("mousedown", startDrag);
box.addEventListener("touchstart", startDrag);

// Event listener for movement
document.addEventListener("mousemove", drag);
document.addEventListener("touchmove", drag);

// Event listener for drag end
document.addEventListener("mouseup", stopDrag);
document.addEventListener("touchend", stopDrag);

// Start dragging
function startDrag(event) {
    isDragging = true;
    box.style.cursor = "grabbing";
}

// Dragging logic
function drag(event) {
    if (!isDragging) return;

    // Get mouse or touch coordinates
    const clientX = event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
    const clientY = event.type === "mousemove" ? event.clientY : event.touches[0].clientY;

    // Get game area bounds
    const bounds = gameArea.getBoundingClientRect();

    // Calculate new position within bounds
    const x = Math.min(bounds.width - 50, Math.max(0, clientX - bounds.left - 25));
    const y = Math.min(bounds.height - 50, Math.max(0, clientY - bounds.top - 25));

    // Update the position of the box
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

// Stop dragging
function stopDrag() {
    isDragging = false;
    box.style.cursor = "grab";
}
