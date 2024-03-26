import { Link, Box } from "@mui/material";
import style from "./style.module.css";
import { LinkProps } from "react-router-dom";
import { RefAttributes } from "react";

export type SidebarMenuProps = {
    testId: string;
    title: string;
    icon?: React.ReactNode;
    active?: boolean;
    link: React.ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
    to: string;
}
export const SidebarMenu = ({testId, title, icon, active, link, to}:SidebarMenuProps) => {
    return(
        <Box className={`${style.sidebarMenu} ${icon ? style.sidebarMenu__icon__container: ""} ${active ? style.active : ""}`}>
        {!!icon && icon}
            <Link
            data-testid = {testId}
            className={`${style.sidebarMenu__link}`}
            underline="none"
            component={link}
            to={to}>
                {title}
            </Link>
        </Box>
    )
}