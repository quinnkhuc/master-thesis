function ParentLink(props: { name: string }) {
  return (
    <a href="#" className="font-montserrat font-bold">
      {props.name}
    </a>
  );
}

function ChildLink(props: { name: string }) {
  return (
    <a href="#" className="font-karla">
      {props.name}
    </a>
  );
}

export function Navigation() {
  return (
    <div className="md:flex md:flex-col md:gap-8 hidden">
      <a href="#" className="font-montserrat font-bold text-green underline">
        Home
      </a>
      <div className="flex flex-col gap-1 w-44">
        <ParentLink name="Shipping" />
        <ChildLink name="Create Shipment" />
        <ChildLink name="Calculate Shipping Cost" />
        <ChildLink name="Return a Package" />
        <ChildLink name="Batch File Shipping" />
      </div>
      <div className="flex flex-col gap-1 w-44">
        <ParentLink name="Tracking" />
        <ChildLink name="Track a Package" />
        <ChildLink name="Informed Delivery" />
        <ChildLink name="Intercept a Package" />
        <ChildLink name="Schedule a Redelivery" />
        <ChildLink name="Hold Mail" />
        <ChildLink name="Change of Address" />
      </div>
      <div className="flex flex-col gap-1 w-44">
        <ParentLink name="Shopping" />
        <ChildLink name="Stamps" />
        <ChildLink name="Shipping Supplies" />
        <ChildLink name="Cards & Envelopes" />
      </div>
      <div className="flex flex-col gap-1 w-44">
        <ParentLink name="Support" />
        <ChildLink name="File a Claim" />
        <ChildLink name="Customer Service" />
        <ChildLink name="FAQ" />
      </div>
    </div>
  );
}
