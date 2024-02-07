import { HeaderSkeleton } from "./header-skeleton.tsx";
import { BannerSkeleton } from "./banner-skeleton.tsx";
import { Navigation } from "../page/navigation.tsx";
import { SubHeader } from "../page/subheader.tsx";
import { Footer } from "../page/footer.tsx";
import {LargeCardSkeleton, SmallCardSkeleton} from "./card-skeleton.tsx";

export function IndexSkeleton({progress} : { progress: number}) {
    return (
        <div className="w-[100vw] overflow-hidden">
            <div className="flex flex-col gap-16">
                <div>
                    {" "}
                    <HeaderSkeleton />
                    <BannerSkeleton progress={progress} />
                </div>
                <div className="pl-[8%] flex gap-32">
                    <Navigation />
                    <div className="overflow-hidden flex flex-col gap-8">
                        <div className="flex flex-col gap-7">
                            <SubHeader name="WHY CHOOSE US" />
                            <div className="flex gap-6 overflow-auto pr-[8%] pb-2">
                                <SmallCardSkeleton progress={progress} />
                                <SmallCardSkeleton progress={progress} />
                                <SmallCardSkeleton progress={progress} />
                                <SmallCardSkeleton progress={progress}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-7">
                            <SubHeader name="OUR SERVICES" />
                            <div className="flex gap-6 overflow-auto pr-[8%] pb-6">
                                <div className="shrink-0">
                                    <LargeCardSkeleton progress={progress}/>
                                </div>
                                <div className="shrink-0">
                                    <LargeCardSkeleton progress={progress}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
