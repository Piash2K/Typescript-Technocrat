//Function

//two types: arrow  function, normal function

function sumNormal(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sumNormal(2, 2));

const sumArrow = (num1: number, num2: number): number => num1 + num2;
console.log(sumArrow(2, 3));

//object =>  function => method

const poorUser = {
  name: "Piash",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    console.log(totalBalance);
    return totalBalance;
  },
};

poorUser.addBalance(10000);

//callback function

const arr: number[] = [1, 4, 6];
const squaredArr = arr.map((element: number): number => element * element);
console.log(squaredArr);
