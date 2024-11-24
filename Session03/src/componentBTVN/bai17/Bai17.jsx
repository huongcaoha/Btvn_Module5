import React, { useState } from "react";

export default function Bai17() {
  const listQuestion = [
    ` Câu 1 : Java là ngôn ngữ lập trình được phát triển bởi công ty nào?
a) Microsoft
b) Sun Microsystems
c) IBM
d) Oracle`,
    `Câu 2 : Trong Java, từ khóa nào được sử dụng để khai báo một lớp?
a) class
b) define
c) type
d) struct`,
    `Câu 3 : Khi một lớp kế thừa từ một lớp khác, từ khóa nào được sử dụng?
a) implements
b) inherits
c) extends
d) derives`,
    `Câu 4 : Java có loại dữ liệu nào sau đây không?
a) int
b) float
c) string
d) character`,
    `Câu 5 : Phương thức nào được gọi khi một đối tượng được tạo ra trong Java?
a) initialize
b) constructor
c) create
d) start`,
    `Câu 6 : Câu lệnh nào được sử dụng để xử lý ngoại lệ trong Java?
a) try-catch
b) handle
c) exception
d) catch-throw`,
    `Câu 7 : Java có hỗ trợ đa kế thừa không?
a) Có
b) Không
c) Chỉ thông qua interface
d) Chỉ trong các phiên bản mới`,
    `Câu 8 : Phương thức main trong Java có kiểu trả về là gì?
a) void
b) int
c) String
d) None`,
    `Câu 9 : Từ khóa nào được sử dụng để tạo một đối tượng trong Java?
a) new
b) create
c) make
d) instance`,
    `Câu 10 : Java là ngôn ngữ lập trình kiểu gì?
a) Biên dịch
b) Thông dịch
c) Nửa biên dịch, nửa thông dịch
d) Tất cả các loại`,
  ];

  const listAnswer = ["b", "a", "c", "c", "b", "a", "b", "a", "a", "c"];
  let [currentIndex, setCurrentIndex] = useState(0);

  let [answer, setAnswer] = useState("");
  let [score, setScore] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer.trim().toLowerCase() === listAnswer[currentIndex]) {
      alert("bạn đã trả lời đúng !");
      setScore(score + 1);
    } else {
      alert("bạn đã trả lời sai !");
    }
    setAnswer("");
    if (currentIndex == 9) {
      alert("Bắt đầu lại !");
      setCurrentIndex(0);
      setScore(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div>
      <h1>Đây là bài tập 17</h1>
      <h3>Score : {score}</h3>
      <h2>Câu hỏi</h2>
      <h3>{listQuestion[currentIndex]}</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          onChange={(event) => setAnswer(event.target.value)}
          placeholder="nhập câu trả lời"
          value={answer}
          required
        />
        <input type="submit" value="Send" />
      </form>
      <hr />
    </div>
  );
}
