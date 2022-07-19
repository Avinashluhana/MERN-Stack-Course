export const generateMines = (data, height, width, mines) => {
  let minePlanted = 0;
  while (minePlanted < mines) {
    let randomX = Math.floor(Math.random() * width);
    let randomY = Math.floor(Math.random() * height);
    if (!data[randomX][randomY].isMine) {
      data[randomX][randomY].isMine = true;
      minePlanted++;
    }
  }
  return data;
};
