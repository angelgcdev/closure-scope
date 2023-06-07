/**Caja de ahorro */
// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`Money Box: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`);
  }
  return countCoins;
}

const myMonexBox= moneyBox();
myMonexBox(5);
myMonexBox(5);
myMonexBox(5);
myMonexBox(5);

const moneyBoxAna=moneyBox();
moneyBoxAna(10);
moneyBoxAna(10);
moneyBoxAna(10);
moneyBoxAna(10);