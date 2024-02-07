import {LoopPercentageSkeleton} from "../loop-percentage-skeleton.tsx";

export function BannerSkeleton({ progress }: {progress: number}) {
    return (
        <LoopPercentageSkeleton height="24rem" progress={progress} />
    )
}
