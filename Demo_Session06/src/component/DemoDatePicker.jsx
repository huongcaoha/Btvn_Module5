import React from "react";
import { Space, DatePicker, RangePicker, message } from "antd";
import moment from "moment";
export default function DemoDatePicker() {
  const onChangeDate = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onChangeRange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    message.success(`Selected time: ${value.format("YYYY-MM-DD HH:mm:ss")}`);
  };

  // Hạn chế ngày
  const disabledDate = (current) => {
    return current && current < moment().startOf("day"); // Không cho phép chọn ngày trước ngày hiện tại
  };

  // Hạn chế thời gian cho DatePicker
  const disabledTime = () => {
    const now = moment();
    return {
      disabledHours: () => {
        const hours = [];
        for (let i = 0; i < now.hour(); i++) {
          hours.push(i);
        }
        return hours; // Không cho phép chọn giờ trước giờ hiện tại
      },
      disabledMinutes: () => {
        if (now.hour() === moment().hour()) {
          const minutes = [];
          for (let i = 0; i < now.minute(); i++) {
            minutes.push(i);
          }
          return minutes; // Không cho phép chọn phút trước phút hiện tại
        }
        return []; // Cho phép chọn tất cả phút nếu không phải là giờ hiện tại
      },
      disabledSeconds: () => {
        return []; // Cho phép chọn tất cả giây
      },
    };
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        showTime
        onChange={onChangeDate}
        onOk={onOk}
        disabledDate={disabledDate}
        disabledTime={disabledTime}
      />
      <RangePicker
        showTime={{
          format: "HH:mm",
        }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChangeRange}
        onOk={onOk}
        disabledDate={disabledDate}
        disabledTime={disabledTime}
      />
    </Space>
  );
}
