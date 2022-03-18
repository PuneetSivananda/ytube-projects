const unSortedList = [7, 3, 4, 6, 2, 11, 1]

function swap(list_of_numsay, x, y) {
    tmp = list_of_numsay[x]
    list_of_numsay[x] = list_of_numsay[y]
    list_of_numsay[y] = tmp
}

function selectionSort(list_of_nums) {
    let n = list_of_nums.length
    var i, j, min_idx;
    for (i = 0; i < n ; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (list_of_nums[j] < list_of_nums[min_idx])
                min_idx = j;
        swap(list_of_nums, min_idx, i);
    }
}

console.log(unSortedList)
selectionSort(unSortedList)
console.log(unSortedList)