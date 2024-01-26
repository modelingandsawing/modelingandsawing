import { PropsWithChildren } from "react";
import s from "./IconWrapper.module.css";

export default function IconWrapper(props: PropsWithChildren) {
  return <div className={s.icon}>{props.children}</div>;
}
