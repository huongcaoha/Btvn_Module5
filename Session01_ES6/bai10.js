let arr1 = [1, 56, 8];
let arr2 = [6, 8, 9, 4];
let arr3 = [123, 5, 9, 1, 5, 6];

const sumArr = (...arrs) => {
  for (let i = 0; i < arrs.length; i++) {
    if (!Array.isArray(arrs[i])) {
      throw new Error("tham số truyền vào không phải là mảng");
    }
  }

  let rs = arrs.map((arr) => arr.reduce((pre, current) => pre + current, 0));
  console.log(rs);
};
sumArr(arr1, arr2, arr3);
