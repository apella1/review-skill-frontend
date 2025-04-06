import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const versions = [
  { value: "v1.0", label: "v1.0 (Latest)" },
  { value: "v0.9", label: "v0.9" },
  { value: "v0.8", label: "v0.8" },
];

export function VersionSelector() {
  return (
    <Select defaultValue="v1.0">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select version" />
      </SelectTrigger>
      <SelectContent>
        {versions.map((version) => (
          <SelectItem key={version.value} value={version.value}>
            {version.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
