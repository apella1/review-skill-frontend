import { useState } from "react";
import FlashcardSummary from "@/components/FlashcardSummary";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TODAY_CARDS_SUMMARY,
  DYNAMIC_CARDS_SUMMARY,
  TIME_PERIODS,
  DURATION_PERIODS,
  TimePeriod,
  DurationPeriod,
} from "@/data/learning-summary";

export default function LearningSummary() {
  const [time, setTime] = useState<TimePeriod>();
  const [duration, setDuration] = useState<DurationPeriod>();

  return (
    <div className="w-full space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TODAY_CARDS_SUMMARY.map((card, index) => (
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
              <Select
                value={duration}
                onValueChange={(value: DurationPeriod) => setDuration(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                  {DURATION_PERIODS.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={time}
                onValueChange={(value: TimePeriod) => setTime(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Time Period" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_PERIODS.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {DYNAMIC_CARDS_SUMMARY.map((card, index) => (
                <FlashcardSummary summary={card} key={index} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
