import { Banner } from "../components/page/banner.tsx";
import { LargeCard, SmallCard } from "../components/page/card.tsx";
import { Footer } from "../components/page/footer.tsx";
import { Header } from "../components/page/header.tsx";
import { Navigation } from "../components/page/navigation.tsx";
import { SubHeader } from "../components/page/subheader.tsx";
import { BannerSkeleton } from "../components/percentage-skeleton/banner-skeleton.tsx";
import { LargeCardSkeleton, SmallCardSkeleton } from "../components/percentage-skeleton/card-skeleton.tsx";
import { HeaderSkeleton } from "../components/percentage-skeleton/header-skeleton.tsx";
import {useFakeQuery} from "../hooks/useFakeQuery.ts";
import {FileRoute} from "@tanstack/react-router";

export const Route = new FileRoute("/percentage-skeleton").createRoute({
    component: LoopSkeleton,
});

function LoopSkeleton() {
    const query1 = useFakeQuery(3000);
    const query2 = useFakeQuery(4000);
    const query3 = useFakeQuery(5000);
    return(
        <div className="w-[100vw] overflow-hidden">
            <div className="flex flex-col gap-16">
                {query1.isLoading ? (
                    <div>
                        <HeaderSkeleton />
                        <BannerSkeleton progress={query1.progress} />
                    </div>
                ) : (
                    <div>
                        <Header />
                        <Banner />
                    </div>
                )}
                <div className="pl-[8%] flex gap-32">
                    <Navigation />
                    <div className="overflow-hidden flex flex-col gap-8">
                        <div className="flex flex-col gap-7">
                            <SubHeader name="WHY CHOOSE US" />
                            {query2.isLoading ? (
                                <div className="flex gap-6 overflow-auto pr-[8%] pb-2">
                                    <SmallCardSkeleton progress={query2.progress} />
                                    <SmallCardSkeleton progress={query2.progress} />
                                    <SmallCardSkeleton progress={query2.progress} />
                                    <SmallCardSkeleton progress={query2.progress} />
                                </div>
                            ) : (
                                <div className="flex gap-6 overflow-auto pr-[8%] pb-2">
                                    <SmallCard
                                        name="Reliability"
                                        description="On time, every time"
                                        img_url="https://images.unsplash.com/photo-1543499459-d1460946bdc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRlbGl2ZXJ5fGVufDB8fDB8fHww"
                                    />
                                    <SmallCard
                                        name="Flexibility in Service"
                                        description="Diverse options tailored to your needs"
                                        img_url="https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                                    <SmallCard
                                        name="Global Reach"
                                        description="Deliver to 100+ countries across the world"
                                        img_url="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                                    <SmallCard
                                        name="Competitive Pricing"
                                        description="Cost effective solutions with exceptional value"
                                        img_url="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-7">
                            <SubHeader name="OUR SERVICES" />
                            {query3.isLoading ? (
                                <div className="flex gap-6 overflow-auto pr-[8%] pb-6">
                                    <LargeCardSkeleton progress={query3.progress}/>
                                    <LargeCardSkeleton progress={query3.progress}/>
                                </div>
                            ) : (
                                <div className="flex gap-6 overflow-auto pr-[8%] pb-6">
                                    <LargeCard name="NATIONWIDE SHIPPING" img_url="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                    <LargeCard name="INTERNATIONAL SHIPPING" img_url="https://images.unsplash.com/photo-1612630741022-b29ec17d013d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
