import { Avatar } from "@mui/material";
import { SidebarLoginProp } from "./type";
import style from "./sidebarlogin.module.css";
import Link from "next/link";

export const SidebarLogin = ({testId, imageUrl, loginUrl}: SidebarLoginProp) => {
    return <Link href={loginUrl}>
        <Avatar className={style.avatar} alt="Remy Sharp" src={imageUrl} data-testid={`${testId}-avatar`} />
    </Link>;
}