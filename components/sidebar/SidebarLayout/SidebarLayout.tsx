import { Box, Container, Grid2 } from "@mui/material";
import style from "./sidebarLayout.module.css";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader"
import { SidebarLogin, SidebarNav } from "..";
import { SidebarLayoutProps } from "./types";

export const Sidebar = ({testId}: SidebarLayoutProps) => {
    return(<Grid2  data-testid={testId} className={`${style.sidebarContainer}`}>
                <Box className={`${style.sidebarBox}`}>
                    <SidebarHeader testId={testId} />
                    <SidebarNav testId={testId} />
                    <SidebarLogin />
                </Box>
            </Grid2>)
}