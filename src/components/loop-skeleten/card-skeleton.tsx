import {LoopSkeleton} from "../loop-skeleton.tsx";

function SmallCardSkeleton() {
    return (
            <div className="shrink-0 flex flex-col gap-3">
                <LoopSkeleton width="18rem" height="18rem" />
                <div className="flex flex-col justify-between items-center gap-2">
                        <LoopSkeleton height="1.75rem" width="18rem" />
                        <LoopSkeleton height="1.5rem" width="18rem" />
                </div>
            </div>
    );
}

function LargeCardSkeleton() {
    return (
            <div className="shrink-0">
                <LoopSkeleton width="36rem" height="18rem" />
            </div>
    );
}

export { SmallCardSkeleton, LargeCardSkeleton };
