/* eslint-disable quotes */
const { Builder, By, Key, until } = require("selenium-webdriver");
const N = 9;

function solveSudoku(grid, row, col) {
  /* If we have reached the 8th
       row and 9th column (0
       indexed matrix) ,
       we are returning true to avoid further
       backtracking       */
  if (row == N - 1 && col == N) return true;

  // Check if column value  becomes 9 ,
  // we move to next row
  // and column start from 0
  if (col === N) {
    row++;
    col = 0;
  }

  // Check if the current position
  // of the grid already
  // contains value >0, we iterate
  // for next column
  if (grid[row][col] !== 0) return solveSudoku(grid, row, col + 1);

  for (let num = 1; num < 10; num++) {
    // Check if it is safe to place
    // the num (1-9)  in the given
    // row ,col ->we move to next column
    if (isSafe(grid, row, col, num)) {
      /*  assigning the num in the current
            (row,col)  position of the grid and
            assuming our assigned num in the position
            is correct */
      grid[row][col] = num;

      // Checking for next
      // possibility with next column
      if (solveSudoku(grid, row, col + 1)) return true;
    }

    /* removing the assigned num , since our
           assumption was wrong , and we go for next
           assumption with diff num value   */
    grid[row][col] = 0;
  }
  return false;
}

// Check whether it will be legal
// to assign num to the
// given row, col
function isSafe(grid, row, col, num) {
  // Check if we find the same num
  // in the similar row , we
  // return false
  for (let x = 0; x <= 8; x++) if (grid[row][x] === num) return false;

  // Check if we find the same num
  // in the similar column ,
  // we return false
  for (let x = 0; x <= 8; x++) if (grid[x][col] === num) return false;

  // Check if we find the same num
  // in the particular 3*3
  // matrix, we return false
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] === num) return false;
    }
  }

  return true;
}

(async function example() {
  const driver = await new Builder().forBrowser("firefox").build();

  let datas = [];
  const sudokutable = [];

  for (let i = 0; i < 9; i++) {
    const tmp = [];
    for (let j = 0; j < 9; j++) {
      tmp.push(0);
    }

    sudokutable.push(tmp);
  }

  try {
    const numbers = [];
    await driver.get("https://sudokutable.com/?lang=ru");
    datas = await driver.findElements(By.css(".game-grid__cell"));
    for (let i = 0; i < datas.length; i++) {
      const text = await datas[i].findElement(By.css("svg > text")).getText();
      numbers.push(+text || 0);
    }
    let arrCounter = 0;
    for (let y = 0; y < 9; y++) {
      if (y !== 0 && y % 3 === 0) {
        arrCounter += 27;
      }
      for (let x = 0; x < 3; x++) {
        sudokutable[y][x] = numbers[arrCounter + (y % 3) * 3 + x];
        sudokutable[y][x + 3] = numbers[arrCounter + (y % 3) * 3 + x + 9];
        sudokutable[y][x + 6] = numbers[arrCounter + (y % 3) * 3 + x + 18];
      }
    }

    solveSudoku(sudokutable, 0, 0);
    let cellCounter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let y = 0; y < 3; y++) {
          for (let x = 0; x < 3; x++) {
            datas = await driver.findElements(By.css(`div.game-grid__cell`));

            const findData = await datas[cellCounter]
              .findElement(By.css("svg > text"))
              .getText();
            if (!findData) {
              await datas[cellCounter].click();
              const button = driver.findElement(
                By.css(`input[value="${sudokutable[i * 3 + y][j * 3 + x]}"]`),
              );

              await button.click();
            }
            cellCounter++;
          }
        }
      }
    }
  } finally {
    driver.quit();
  }
})();
