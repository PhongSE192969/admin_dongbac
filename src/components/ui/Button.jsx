const variantClasses = {
  primary: "border-brand-700 bg-brand-700 text-white hover:bg-brand-800",
  secondary: "border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200",
  outline: "border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
  danger: "border-red-600 bg-red-600 text-white hover:bg-red-700",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
  icon: "h-10 w-10 p-0",
};

export function Button({
  as: Component = "button",
  children,
  className = "",
  icon: Icon,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-55",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} type={Component === "button" ? type : undefined} {...props}>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
      {children}
    </Component>
  );
}
