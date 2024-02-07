import { FacebookIcon } from "../../assets/icon/facebook";
import { TwitterIcon } from "../../assets/icon/twitter";
import { YoutubeIcon } from "../../assets/icon/youtube";
import { InstagramIcon } from "../../assets/icon/instagram";
import { NewsletterIcon } from "../../assets/icon/newsletter";
import { StoreIcon } from "../../assets/icon/store";

function ParentLink(props: { name: string }) {
    return (
      <a href="#" className="font-montserrat font-bold text-sm text-center md:text-left">
        {props.name}
      </a>
    );
  }

  function ParentLinkWithIcon(props: { name: string, icon: JSX.Element }){
    return(
        <a href="#" className="flex gap-2 justify-center md:justify-start">
            {props.icon}
            <p className="font-montserrat font-bold text-sm text-center md:text-left">{props.name}</p>
        </a>
    )
  }
  
  function ChildLink(props: { name: string }) {
    return (
      <a href="#" className="font-karla text-sm text-center md:text-left">
        {props.name}
      </a>
    );
  }

  function ChildLinkWithIcon(props: { name: string, icon: JSX.Element }){
    return(
        <a href="#" className="flex gap-2 justify-center md:justify-start">
            <div className="hidden md:block">{props.icon}</div>
            <p className="font-karla text-sm text-center md:text-left">{props.name}</p>
        </a>
    )
  }

export function Footer(){
    return(
        <footer className="border-t border-gray py-16 px-[8%] flex flex-col justify-between items-center gap-8 md:flex-row">
            <div className="flex gap-8 flex-col md:flex-row md:gap-20">
                <div className="flex flex-col gap-2">
                    <ParentLink name="Company"/>
                    <ChildLink name="About Us"/>
                    <ChildLink name="Careers"/>
                    <ChildLink name="Sustainability"/>
                    <ChildLink name="Accessibility"/>
                </div>
                <div className="flex flex-col gap-2">
                    <ParentLink name="Legal Information"/>
                    <ChildLink name="Return Policy"/>
                    <ChildLink name="Privacy Policy"/>
                    <ChildLink name="Terms & Conditions"/>
                    <ChildLink name="Cookie Settings"/>
                </div>
            </div>
            <div className="flex gap-8 flex-col md:flex-row md:gap-20">
                <div className="flex flex-col gap-2">
                    <ParentLink name="Social Media"/>
                    <ChildLinkWithIcon name="Youtube" icon={<YoutubeIcon/>}/>
                    <ChildLinkWithIcon name="Facebook" icon={<FacebookIcon/>}/>
                    <ChildLinkWithIcon name="Instagram" icon={<InstagramIcon/>}/>
                    <ChildLinkWithIcon name="Twitter" icon={<TwitterIcon/>}/>
                </div>
                <div className="flex flex-col gap-2">
                    <ParentLinkWithIcon name="Subscribe to Newsletter" icon={<NewsletterIcon/>}/>
                    <ParentLinkWithIcon name="Store Locator" icon={<StoreIcon/>}/>
                </div>
            </div>
        </footer>
    )
}