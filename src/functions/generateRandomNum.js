function generateRandomNum(maxNum) {
  let dar = Math.floor(Math.random() * maxNum);
  if (dar === maxNum) {
    generateRandomNum(maxNum);
  }
  return dar;
}

export default generateRandomNum;
