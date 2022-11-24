export const reshape = (array: any, rows: number, cols: number) => {
  let copy = array.slice(0); // Copy all elements.
  array.length = 0; // Clear out existing array.

  for (let r = 0; r < rows; r++) {
    let row: number[] = [];
    for (let c = 0; c < cols; c++) {
      let i = r * cols + c;
      if (i < copy.length) {
        row.push(copy[i]);
      }
    }
    array.push(row);
  }
  return array;
};

export const shuffle = (array: number[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
