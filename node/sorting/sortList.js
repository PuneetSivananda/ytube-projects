const unSortedList = [7, 3, 4, 6, 2, 11, 1]

console.log(unSortedList);

// function to sort the list using bubble sort
function isSorted(unSortedList) {
    // create a base case that the first item is smaller than the item on right
    for (x = 0; x < unSortedList.length - 1; x++) {
        if (unSortedList[x] > unSortedList[x + 1]) {
            return false;
        }
    }
    return true;
}

while (!isSorted(unSortedList)) {
    // for each item bubble the largest item to the top
    for (x = 0; x < unSortedList.length - 1; x++) {
        if (unSortedList[x] > unSortedList[x + 1]) {
            tmp = unSortedList[x];
            unSortedList[x] = unSortedList[x + 1];
            unSortedList[x + 1] = tmp;
        }
    }
}

console.log(unSortedList);