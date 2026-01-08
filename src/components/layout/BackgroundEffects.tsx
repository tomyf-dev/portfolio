export function BackgroundEffects() {
  return (
    <>
      {/* Dawn Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, transparent 60%, oklch(from #f0a8c4 l c h / 0.08) 80%, oklch(from #ffb480 l c h / 0.1) 100%)',
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px),
            radial-gradient(circle, var(--secondary) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Ripple Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full border-[1.5px] border-primary opacity-40 animate-ripple"
        />
        <div
          className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full border-[1.5px] border-glow-dawn opacity-35 animate-ripple"
          style={{ animationDelay: '2.5s' }}
        />
        <div
          className="absolute bottom-[15%] left-[30%] w-[550px] h-[550px] rounded-full border-[1.5px] border-secondary opacity-35 animate-ripple"
          style={{ animationDelay: '5s' }}
        />
      </div>
    </>
  );
}
