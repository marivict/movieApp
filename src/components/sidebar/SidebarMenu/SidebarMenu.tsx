import { Link, Typography, Box } from "@mui/material";
import style from "./style.module.css";
export type SidebarMenuProps = {
    testId: string;
    title: string;
    icon?: React.ReactNode;
    active?: boolean;
}
export const SidebarMenu = ({testId, title, icon, active}:SidebarMenuProps) => {
    return(
    <Box className={`${style.sidebarMenu} ${icon ? style.sidebarMenu__icon__container: ""} ${active ? style.active : ""}`}>
        {!!icon && icon}
        <Link
        data-testid = {testId}
        className={`${style.sidebarMenu__link}`}
        underline="none"
>{title}
    </Link>
    </Box>
    )
}