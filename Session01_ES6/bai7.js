const object1 = {
  username: "nguyễn công hưởng",
  age: 18,
  address: "hoài đức",
};
const object2 = {
  username: "nguyễn công hưởng123",
  age: 19,
  address: "hoài đức123",
  phone: "0367508795",
};
const object3 = {
  username: "nguyễn công hưởng456",
  age: 20,
  address: "hoài đức456",
  gender: "male",
};
const object4 = {
  username: "nguyễn công hưởng789",
  age: 21,
  address: "hoài đức789",
  abc: "xyz",
};

const mergeObject = (...arrs) => {
  arrs.forEach((item) => {
    if (!typeof item === "object" && item == null) {
      throw new Error("Tham số truyền vào ko phải là đối tượng");
    }
  });
  let rs = {};
  arrs.forEach((item) => {
    rs = { ...rs, ...item };
  });
  console.log(rs);
};
mergeObject(object1, object2, object3, object4);
