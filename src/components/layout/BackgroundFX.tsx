/**
 * Site-wide ambient background — fixed color field the Liquid Glass
 * surfaces blur and refract. Uses radial gradients instead of CSS
 * blur filters, so the whole layer costs almost nothing to composite.
 */
export function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Ambient color pools — pre-blurred via gradient falloff */}
      <div
        className="absolute -top-[20%] left-[5%] h-[60vh] w-[60vw]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.14), transparent 65%)",
        }}
      />
      <div
        className="absolute top-[28%] -right-[12%] h-[55vh] w-[45vw]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.10), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-8%] left-[-8%] h-[50vh] w-[45vw]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.09), transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[12%] right-[15%] h-[35vh] w-[30vw]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.08), transparent 65%)",
        }}
      />

      {/* Structure */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-60" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
