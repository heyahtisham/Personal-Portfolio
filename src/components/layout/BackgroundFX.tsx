/**
 * Site-wide ambient background — fixed color field the Liquid Glass
 * surfaces blur and refract. Static gradients (no animation) keep the
 * GPU cost near zero while giving every glass panel depth.
 */
export function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Ambient color pools */}
      <div className="absolute -top-[20%] left-[10%] h-[55vh] w-[55vw] rounded-full bg-primary/[0.13] blur-[110px]" />
      <div className="absolute top-[30%] -right-[15%] h-[50vh] w-[40vw] rounded-full bg-accent/[0.09] blur-[110px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[45vh] w-[40vw] rounded-full bg-violet-600/[0.08] blur-[110px]" />
      <div className="absolute bottom-[15%] right-[20%] h-[30vh] w-[25vw] rounded-full bg-primary/[0.07] blur-[90px]" />

      {/* Structure */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-60" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
