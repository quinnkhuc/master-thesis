import { FileRoute } from "@tanstack/react-router";
import { PercentDone } from "../components/loading/percent-done.tsx";
import { StaticText } from "../components/loading/static-text.tsx";
import { useFakeQuery } from "../hooks/useFakeQuery.ts";
import { Index } from "../components/page/index.tsx";

export const Route = new FileRoute("/static-percentage").createRoute({
  component: StaticPercentage,
});

function StaticPercentage() {
  const query = useFakeQuery(5000);
  if (query.isLoading)
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <PercentDone value={query.progress} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <StaticText />
          </div>
        </div>
      </div>
    );
  return <Index />;
}
