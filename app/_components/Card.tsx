import React from "react";

type CardPropsType = Readonly<{
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}>;

function Card({ className, children, onClick }: CardPropsType) {
  return (
    <div
      className={`shadow-md rounded-md bg-primary-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
