const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "p-6 rounded-lg bg-bg text-text border border-text/30 shadow-[3px_3px_0px_0px_theme(colors.text/30%)] text-center flex flex-col items-center justify-center transition-all h-full max-w-65 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Card;
