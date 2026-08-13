interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32 ${className}`}
    >
      {children}
    </div>
  );
}