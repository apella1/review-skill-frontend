import FlashcardSummary from "@/components/FlashcardSummary";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CardSummary } from "@/types/types";

export default function LearningSummary() {
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const todayCardsSummary: CardSummary[] = [
    {
      title: "Due Cards",
      value: 0,
    },
    {
      title: "Cards Learned",
      value: 0,
    },
    {
      title: "Total Reviews",
      value: 0,
    },
    {
      title: "Retention Rate",
      value: 0,
    },
  ];

  const dynamicCardsSummary: CardSummary[] = [
    {
      title: "Cards Learned",
      value: 0,
    },
    {
      title: "New Cards Learned",
      value: 0,
    },
    {
      title: "Total Reviews",
      value: 0,
    },
    {
      title: "Retention Rate",
      value: 0,
    },
  ];

  return (
    <div className="w-full space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {todayCardsSummary.map((card, index) => (
                <FlashcardSummary summary={card} key={index} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Overview</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last 1 Week</SelectItem>
                  <SelectItem value="month">Last 1 Month</SelectItem>
                  <SelectItem value="year">Last 1 Year</SelectItem>
                  <SelectItem value="all-time">All Time</SelectItem>
                </SelectContent>
              </Select>

              <Select value={time} onValueChange={setTime}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dynamicCardsSummary.map((card, index) => (
                <FlashcardSummary summary={card} key={index} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
