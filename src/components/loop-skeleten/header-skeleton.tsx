import {LoopSkeleton} from "../loop-skeleton.tsx";

export function HeaderSkeleton() {
    return (
        <header className="py-6 px-[8%] flex justify-between">
            <a href="#" className="font-montserrat font-semibold text-4xl">
                VOYAGO
            </a>
            <div className="flex gap-4">
                <LoopSkeleton width="2.5rem" height="2.5rem" />
                <LoopSkeleton width="2.5rem" height="2.5rem" />
            </div>
        </header>
    );
}
