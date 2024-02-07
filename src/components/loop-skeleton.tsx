export function LoopSkeleton({width, height}: {width?: string, height?: string}) {
    return <div className="bg-[linear-gradient(90deg,rgba(0,0,0,0.06)_25%,rgba(0,0,0,0.15)_37%,rgba(0,0,0,0.06)_63%)] bg-[length:400%_100%] animate-wave" style={{
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "100%"
    }} />
}