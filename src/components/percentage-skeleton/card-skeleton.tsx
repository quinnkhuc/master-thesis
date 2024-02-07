import {PercentageSkeleton} from "../percentage-skeleton.tsx";
import {Skeleton} from "../skeleton.tsx";

function SmallCardSkeleton({ progress }: {progress: number}) {
    return (
            <div className="shrink-0 flex flex-col gap-3">
                <PercentageSkeleton width="18rem" height="18rem" progress={progress} />
                <div className="flex flex-col justify-between items-center gap-2">
                        <Skeleton height="1.75rem" width="18rem" />
                        <Skeleton height="1.5rem" width="18rem" />
                </div>
            </div>
    );
}

function LargeCardSkeleton({ progress }: {progress: number}) {
    return (
            <div className="shrink-0">
                <PercentageSkeleton width="37rem" height="18rem" progress={progress} />
            </div>
    );
}

export { SmallCardSkeleton, LargeCardSkeleton };
