import {PercentDone} from "./loading/percent-done.tsx";

export function LoopPercentageSkeleton({width, height, progress}: {width?: string, height?: string, progress: number}) {
    return <div className="flex items-center justify-center bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_25%,rgba(0,0,0,0.15)_37%,rgba(0,0,0,0.06)_63%)] bg-[length:400%_100%] animate-wave" style={{
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "100%"
    }}>
        <PercentDone value={progress} size="small" />
    </div>
}