// Generate an array of random numbers
const countSortArray = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

// Initialize canvas and context
const bubbleSortCanvas = document.getElementById(
  "canvas1"
) as HTMLCanvasElement;
const bubbleSortCtx = bubbleSortCanvas.getContext("2d") || null;
const bubbleSortbarWidth = bubbleSortCanvas.width / bubbleSortArray.length;

// Function to draw the bars
function drawCountSortBars() {
  if (bubbleSortCtx != null) {
    // check for null error
    bubbleSortCtx.clearRect(
      0,
      0,
      bubbleSortCanvas.width,
      bubbleSortCanvas.height
    );
    bubbleSortArray.forEach((num, index) => {
      const barHeight = (num / 100) * bubbleSortCanvas.height;
      const x = index * bubbleSortbarWidth;
      const y = bubbleSortCanvas.height - barHeight;

      bubbleSortCtx.fillStyle = "blue";
      bubbleSortCtx.fillRect(x, y, bubbleSortbarWidth, barHeight);
    });
  }
}

const countingSort = () => {
  const max = Math.max(...countSortArray);
  const count = [];

  // initialize the count sort array until the max number of items that can be stored
  for (let i = 0; i <= max; i++) {
    count[i] = 0;
  }

  console.log(count);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }

  // Then, iterate over count's properties from min to max:
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      // redraw the array here
      count[i]--;
    }
  }
  return sortedArr;
};

// Count sort algorithm
async function countSort() {
  for (let i = 0; i < bubbleSortArray.length - 1; i++) {
    for (let j = 0; j < bubbleSortArray.length - i - 1; j++) {
      if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
        // Swap elements
        [bubbleSortArray[j], bubbleSortArray[j + 1]] = [
          bubbleSortArray[j + 1],
          bubbleSortArray[j],
        ];

        // Redraw bars after swap
        drawCountSortBars();

        // Pause for visualization
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
  }
}

drawCountSortBars();
