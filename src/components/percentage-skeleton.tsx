import {PercentDone} from "./loading/percent-done.tsx";

export function PercentageSkeleton({width, height, progress}: {width?: string, height?: string, progress: number}) {
    return <div className="bg-light-gray flex justify-center items-center" style={{
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "100%"
    }}>
        <PercentDone value={progress} size="small" />
    </div>
}