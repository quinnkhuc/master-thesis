import {PercentageSkeleton} from "../percentage-skeleton.tsx";

export function BannerSkeleton({ progress }: {progress: number}) {
    return (
        <PercentageSkeleton height="24rem" progress={progress} />
    )
}
