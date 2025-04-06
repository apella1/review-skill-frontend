import { CardSummary } from "@/types/types";

export const TODAY_CARDS_SUMMARY: CardSummary[] = [
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

export const DYNAMIC_CARDS_SUMMARY: CardSummary[] = [
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

export const TIME_PERIODS = [
  { value: "daily", label: "Daily" },
  { value: "monthly", label: "Monthly" },
] as const;

export const DURATION_PERIODS = [
  { value: "week", label: "Last 1 Week" },
  { value: "month", label: "Last 1 Month" },
  { value: "year", label: "Last 1 Year" },
  { value: "all-time", label: "All Time" },
] as const;

export type TimePeriod = (typeof TIME_PERIODS)[number]["value"];
export type DurationPeriod = (typeof DURATION_PERIODS)[number]["value"];
