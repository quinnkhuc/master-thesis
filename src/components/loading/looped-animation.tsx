export function LoopedAnimation() {
  return (
      <div className="flex gap-2">
          <span className="w-5 h-5 animate-fade bg-[#C7C7C7]"/>
          <span className="w-5 h-5 animate-fade bg-[#C7C7C7] [animation-delay:150ms]"/>
          <span className="w-5 h-5 animate-fade bg-[#C7C7C7] [animation-delay:300ms]"/>
      </div>
  );
}
