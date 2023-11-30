import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DashboardLayout, ProtectedLayout } from "../../layouts";
import { useState } from "react";

export default function Dashboard() {
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const handleDurationChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setDuration(value as string);
  };
  const handleTimeChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setTime(value as string);
  };
  return (
    <ProtectedLayout>
      <DashboardLayout>
        <section className="flex flex-col space-y-4">
          <section className="flex flex-col space-y-2">
            <h2 className="font-medium">Today</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>Cards Learned</p>
                <p className="text-[#035afc]">0</p>
              </div>
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>Retention Rate</p>
                <p className="text-[#035afc]">0%</p>
              </div>
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>Total Reviews</p>
                <p className="text-[#035afc]">0</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col space-y-4">
            <h2 className="font-medium">Overview</h2>
            <div className="flex items-center space-x-4">
              <FormControl fullWidth>
                <InputLabel id="duration">Duration</InputLabel>
                <Select
                  id="duration"
                  onChange={() => handleDurationChange}
                  label="Duration"
                  value={duration}
                >
                  <MenuItem value={"week"}>Last 1 Week</MenuItem>
                  <MenuItem value={"month"}>Last 1 Month</MenuItem>
                  <MenuItem value={"year"}>Last 1 Year</MenuItem>
                  <MenuItem value={"all-time"}>All Time</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="time">Time</InputLabel>
                <Select
                  id="time"
                  onChange={() => handleTimeChange}
                  label="Time"
                  value={time}
                >
                  <MenuItem value={"daily"}>Daily</MenuItem>
                  <MenuItem value={"monthly"}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>Cards Learned</p>
                <p className="text-[#035afc]">0</p>
              </div>
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>New Cards Learned</p>
                <p className="text-[#035afc]">0</p>
              </div>
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>Total Reviews</p>
                <p className="text-[#035afc]">0</p>
              </div>
              <div className="p-4 flex flex-col space-y-2 border border-gray-200">
                <p>Retention Rate</p>
                <p className="text-[#035afc]">0%</p>
              </div>
            </div>
          </section>
        </section>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
