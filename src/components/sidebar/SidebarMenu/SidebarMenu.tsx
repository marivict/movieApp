import { Box } from "@mui/material";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

export type SidebarMenuProps = {
    testId: string;
    title: string;
    icon?: React.ReactNode;
    to: string;
}
export const SidebarMenu = ({testId, title, icon, to}:SidebarMenuProps) => {
    return(
        <NavLink 
            data-testid = {testId}
            to={to}>
                {({ isActive }) => (
                    <Box className={`${style.sidebarMenu} ${icon ? style.sidebarMenu__icon__container: ""} ${isActive ? style.active : ""}`}>
                    {!!icon && icon}
                
                    <span className={`${style.sidebarMenu__link}`}>{title}</span>
                
            </Box>
                )}
                
        </NavLink >
    )
}