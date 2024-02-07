export function Skeleton({width, height}: { width?: string, height?: string}) {
    return <div className="bg-light-gray" style={{
        width: width !== undefined ? width : "100%",
        height: height !== undefined ? height : "100%"
    }} />
}