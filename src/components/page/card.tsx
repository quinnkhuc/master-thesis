import { ArrowIcon } from "../../assets/icon/arrow";

function SmallCard(props: {
  name: string;
  description: string;
  img_url: string;
}) {
  return (
    <a href="#" className="block">
      <div className="flex flex-col gap-3">
      <div
        style={{backgroundImage:`url(${props.img_url})`}} className="w-72 h-72 bg-cover bg-center rounded-xl" 
      ></div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-source-sans-pro text-xl">{props.name}</p>
          <p className="font-source-sans-pro text-dark-gray">
            {props.description}
          </p>
        </div>
        <ArrowIcon />
      </div>
    </div>
    </a>
  );
}

function LargeCard(props: { name: string; img_url: string }) {
  return (
    <a href="#" className="block">
      <div
      style={{backgroundImage:`url(${props.img_url})`}}
      className="min-w-[592px] h-72 bg-cover bg-center rounded-xl flex flex-col justify-center items-center"
    >
      <p className="font-source-sans-pro font-extrabold text-2xl text-white tracking-wide">{props.name}</p>
    </div>
    </a>
  );
}

export { SmallCard, LargeCard };
