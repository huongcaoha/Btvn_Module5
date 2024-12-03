import { Button } from "antd";
import React from "react";

export default function SlideHero() {
  return (
    <div className="w-full h-[100vh] ">
      <div>
        <div>
          <img
            className="bg-cover bg-center w-full relative"
            src="https://media.gucci.com/dynamic/b3c8/mI3cdghMzKBqD6aOR64JXR99cMpe8RzN1q18xtq11Fm9HmwR0HngTJkH9khu1RLOpMNAGZw1ZSpeJWXm5GD+PLem1lZg4sYxSTkAoDpTrIHPkpSbX0d2QWHg8i46k0VLzYkdhkjokyfmudLHDYbcIKZTQGkwKzA4Jt0afUU_jpAoYGvITslibsohBqcuD+wSopoBzqkMJcSBu5AWLBmMb+Zyzszb3YMP7V4vjn7ilfxtKMRl3KYy9IAHPVnqbRn8X+kJsMbcl2W55sncauPebqp0wjfvNuKQKlrQT2LD9RfzBqXT4pzkEIL3QN+AtfUJBVNeUSBWsv9FQVu6LVsF8GFFxfSwVu1a7aiI7isZOu7R95Mj5Q+B2Q+DzJS0s9GC/HP_Hero-FullBleed-Desktop_Gucci-GiftGiving-Nov24-ASE-240720-0036-6378_001_Default.png"
            alt=""
          />
        </div>
        <p className="text-white absolute bottom-[150px] left-[44%] text-4xl">
          Gucci Gift Giving
        </p>
        <div className="flex gap-5 bottom-[80px] left-[45%] absolute text-center">
          <Button
            type="default"
            className="rounded-none w-[100px] h-[50px] font-semibold"
          >
            FOR HER
          </Button>
          <Button
            type="default"
            className="rounded-none w-[100px] h-[50px] font-semibold"
          >
            FOR HIM
          </Button>
        </div>
      </div>
    </div>
  );
}
