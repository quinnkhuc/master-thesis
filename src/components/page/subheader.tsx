export function SubHeader(props: { name: string }) {
  return (
    <div>
      <h2 className="font-montserrat font-medium text-2xl tracking-wide">
        {props.name}
      </h2>
    </div>
  );
}
