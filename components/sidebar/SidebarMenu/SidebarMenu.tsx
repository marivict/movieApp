"use client";
import { usePathname } from 'next/navigation';
import { Box } from "@mui/material";
import style from "./style.module.css";
import Link from "next/link";

export type SidebarMenuProps = {
    testId: string;
    icon?: React.ReactNode;
    link: string;
}


export const SidebarMenu = ({testId, icon, link}:SidebarMenuProps) => {
    const pathname = usePathname();

    return(
        <Link href={link}>
            <Box className={`${style.sidebarMenu} ${pathname === link ? style.active : ''}  ${icon ? style.sidebarMenu__icon__container: ""}`}>
                    {!!icon && icon}
            </Box>
        </Link>
    )
}