import { Progress } from "@ark-ui/react";

export function PercentDone({ value, size }: { value: number, size?: "small" }) {
  return (
    <Progress.Root value={value}>
      {/*<Progress.Label>*/}
      {/*    */}
      {/*</Progress.Label>*/}
      {/*<Progress.ValueText />*/}
      <Progress.Indicator state="loading" />
      <Progress.Circle className={`${size === "small" ? "[--size:6.25rem]" : "[--size:18.75rem]"} [--thickness:0.25rem]`}>
        <Progress.CircleTrack className="stroke-gray" />
        <Progress.CircleRange className="stroke-dark-gray " />
      </Progress.Circle>
    </Progress.Root>
  );
}
