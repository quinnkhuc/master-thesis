export function Banner() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover h-96 flex flex-col flex-wrap justify-center gap-2 px-[8%]">
      <p className="text-white font-montserrat text-3xl">TRACK PACKAGES</p>
      <input className="block w-full max-w-96 rounded-sm p-1 font-karla outline-green"></input>
      <a href="#" className="font-karla text-white underline">
        Cannot find your package?
      </a>
    </div>
  );
}
