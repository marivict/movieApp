"use client";
import { usePathname } from 'next/navigation';
import { Box } from "@mui/material";
import style from "./sidebarMenu.module.css";
import Link from "next/link";
import { SidebarMenuProps } from './types';

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