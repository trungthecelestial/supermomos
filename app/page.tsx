"use client";

import { DatePicker } from "@mantine/dates";
import CapacityIcon from "assets/icons/capacity.svg";
import CostIcon from "assets/icons/cost.svg";
import DateIcon from "assets/icons/date.svg";
import LocationIcon from "assets/icons/location.svg";
import TimeIcon from "assets/icons/time.svg";
import Image from "next/image";
import { useState } from "react";
import InputMask from "react-input-mask";

export default function Home() {
  const [title, setTitle] = useState("Untitle Event");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <div className="flex gap-5">
        <div>
          <div
            contentEditable
            suppressContentEditableWarning
            className="w-fit bg-[#942F70] px-3 py-1 text-5xl font-bold leading-tight"
            onChange={(event) => {
              setTitle(event.currentTarget.textContent ?? "");
            }}
          >
            {title}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Image
                alt="Time"
                className="h-12 w-12 scale-[0.7]"
                src={DateIcon}
              />
              <DatePicker
                className="flex h-10 w-[180px] items-center rounded-md border-0 bg-white"
                clearable={false}
                inputFormat="DD/MM/YYYY"
                minDate={new Date()}
                placeholder="Date"
                value={date}
                classNames={{
                  wrapper: "h-10",
                  input:
                    "border-0 placeholder:text-[#333] text-[28px] leading-10 h-10 font-semibold",
                }}
                onChange={setDate}
              />
            </div>

            <div className="flex items-center gap-2">
              <Image
                alt="Date"
                className="h-12 w-12 scale-[0.7]"
                src={TimeIcon}
              />
              <InputMask
                className="flex h-10 w-[180px] items-center rounded-md border-0 bg-white text-[28px] font-semibold leading-10 text-black  placeholder:text-[#333]"
                mask="99:99"
                maskChar="_"
                placeholder="Time"
                type="text"
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <Image alt="Location" className="h-6 w-6" src={LocationIcon} />
            <input
              className="w-[454px] rounded-md border-0 font-semibold placeholder:text-[#333]"
              placeholder="Venue"
              type="text"
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-8">
            <div className="flex items-center gap-2">
              <Image alt="Location" className="h-6 w-6" src={CapacityIcon} />
              <input
                className="w-[155px] rounded-md border-0 font-semibold placeholder:text-[#333]"
                placeholder="Venue"
                type="text"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <Image alt="Location" className="h-6 w-6" src={CostIcon} />
              <input
                className="w-[155px] rounded-md border-0 font-semibold placeholder:text-[#333]"
                placeholder="Venue"
                type="text"
                value={location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="h-[445px] flex-grow rounded-tr-[64px] rounded-bl-[64px] border border-dashed border-[#F2F2F2] bg-[#F2F2F2] backdrop-opacity-10"></div>
      </div>
    </div>
  );
}
