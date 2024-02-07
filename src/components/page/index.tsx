import { Header } from "./header.tsx";
import { Banner } from "./banner.tsx";
import { Navigation } from "./navigation.tsx";
import { SubHeader } from "./subheader.tsx";
import { LargeCard, SmallCard } from "./card.tsx";
import { Footer } from "./footer.tsx";

export function Index() {
  return (
    <div className="w-[100vw]">
      <div className="flex flex-col gap-16">
      <div>
        {" "}
        <Header />
        <Banner />
      </div>
      <div className="pl-[8%] flex gap-32">
        <Navigation />
        <div className="overflow-hidden flex flex-col gap-8">
          <div className="flex flex-col gap-7">
            <SubHeader name="WHY CHOOSE US" />
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
          </div>
          <div className="flex flex-col gap-7">
            <SubHeader name="OUR SERVICES" />
            <div className="flex gap-6 overflow-auto pr-[8%] pb-6">
            <LargeCard name="NATIONWIDE SHIPPING" img_url="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <LargeCard name="INTERNATIONAL SHIPPING" img_url="https://images.unsplash.com/photo-1612630741022-b29ec17d013d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
      </div>
  );
}
