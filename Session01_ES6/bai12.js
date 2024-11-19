const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupInput(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("tham số truyền vào phải là 1 mảng");
  } else {
    let newArr = [...arr].map((e) => e.split("").sort().join(""));
    let grouped = {};
    for (let i = 0; i < newArr.length; i++) {
      if (!grouped[newArr[i]]) {
        grouped[newArr[i]] = [];
      }
      grouped[newArr[i]].push(arr[i]);
    }
    const rs = Object.values(grouped);
    console.log(rs);
  }
}
groupInput(arr);
