const Card = ({
  children,
  className = "",

  role,
  "aria-roledescription": ariaRoledescription,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;

  role?: string;
  "aria-roledescription"?: string;
  "aria-label"?: string;
}) => {
  return (
    <div
      role={role}
      aria-roledescription={ariaRoledescription}
      aria-label={ariaLabel}
      className={
        "p-6 rounded-lg bg-bg text-text border border-text/30 shadow-[3px_3px_0px_0px_theme(colors.text/30%)] text-center flex flex-col items-center justify-center transition-all max-w-65 " +
        // "p-6 rounded-lg bg-bg text-text border border-text/30 shadow-[3px_3px_0px_0px_theme(colors.text/30%)] text-center flex flex-col items-center justify-center transition-all h-full max-w-65 " +
        className
      }
      style={{ height: "stretch" }}
    >
      {children}
    </div>
  );
};

export default Card;
