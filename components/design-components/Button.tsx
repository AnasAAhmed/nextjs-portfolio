import ButtonSvg from "@/assets/svg/ButtonSvg";
import Link from "next/link";
import { ReactNode } from "react";


const Button = ({ download = false, inNewTab, className, title, href, onClick, children, px, white }: { download?: boolean; inNewTab?: boolean; title?: string; className?: string, href?: string, onClick?: () => void, children: ReactNode, px?: string, white?: boolean }) => {
  const classes = `font-sans font-semibold relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"
    } ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button style={{ color: white ? "black" : "" }} title={title || ''} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({ white: white || false })}
    </button>
  );

  const renderLink = () => (
    <Link prefetch={false} download={download} style={{ color: white ? "black" : "" }} title={title || ''} target={inNewTab ? "_blank" : ""} href={href!} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg({ white: white || false })}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
