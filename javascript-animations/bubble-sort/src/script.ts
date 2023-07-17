// Generate an array of random numbers
const array = Array.from({ length: 50 }, () => Math.floor(Math.random() * 100));

// Initialize canvas and context
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") || null;
const barWidth = canvas.width / array.length;

// Function to draw the bars
function drawBars() {
  if (ctx != null) {
    // check for null error
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    array.forEach((num, index) => {
      const barHeight = (num / 100) * canvas.height;
      const x = index * barWidth;
      const y = canvas.height - barHeight;

      ctx.fillStyle = "blue";
      ctx.fillRect(x, y, barWidth, barHeight);
    });
  }
}

// Bubble sort algorithm
async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Redraw bars after swap
        drawBars();

        // Pause for visualization
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
  }
}

// Start sorting animation
bubbleSort();
