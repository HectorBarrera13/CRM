type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function Card({ children, className = "", style = {} }: Props) {
  return (
    <div
      className={`card shadow-sm p-3 ${className}`}
      style={{ borderRadius: "1rem", ...style }}
    >
      {children}
    </div>
  );
}

export default Card;
