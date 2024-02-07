import { FileRoute } from "@tanstack/react-router";
import {LoopedAnimation} from "../components/loading/looped-animation.tsx";
import {useFakeQuery} from "../hooks/useFakeQuery.ts";
import {StaticText} from "../components/loading/static-text.tsx";
import { Index } from "../components/page/index.tsx";

export const Route = new FileRoute("/static-loop").createRoute({
  component: StaticLoop,
});

function StaticLoop() {
  const query = useFakeQuery(5000);
  if (query.isLoading)
    return (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex flex-col gap-4 items-center">
            <LoopedAnimation />
            <StaticText />
          </div>
        </div>
    )
  return <Index />
}
