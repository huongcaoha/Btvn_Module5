let arr1 = ["a", "b", "c", "e", "f"];
let arr2 = ["d"];

const arrayGrafting = (arr1, arr2, index) => {
  let rs = [...arr1];
  for (let i = arr2.length - 1; i >= 0; i--) {
    rs.splice(index, 0, arr2[i]);
  }
  for (let i = 0; i < rs.length - 1; i++) {
    if (rs[i] > rs[i + 1]) {
      throw new Error("vị trí truyền vào ko hợp lệ");
    }
  }
  console.log(rs);
};
arrayGrafting(arr1, arr2, 3);
