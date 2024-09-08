import { Box } from "@mui/material";
import style from "./style.module.css";
import Link from "next/link";

export type SidebarMenuProps = {
    testId: string;
    icon?: React.ReactNode;
    to: string;
}
export const SidebarMenu = ({testId, icon, to}:SidebarMenuProps) => {
    return(
        <Link href={""}>
            <Box className={`${style.sidebarMenu} ${icon ? style.sidebarMenu__icon__container: ""}`}>
                    {!!icon && icon}
            </Box>
        </Link>
    )
}