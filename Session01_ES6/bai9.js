let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
let arr3 = [true, false, true];

const sortType = (...arrs) => {
  arrs.forEach((item) => {
    if (!Array.isArray(item)) {
      throw new Error("tham số truyền vào không phải là 1 mảng");
    }
  });
  let length = arrs[0].length;
  arrs.forEach((item) => {
    if (item.length != length) {
      throw new Error("tham số truyền vào có độ dài mảng ko bằng nhau");
    }
  });
  let rs = Array.from({ length: length }, () => []);

  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs.length; j++) {
      rs[i].push(arrs[j][i]);
    }
  }
  console.log(rs);
};
sortType(arr1, arr2, arr3);
