import { Box, Container, Grid2 } from "@mui/material";
import style from "./sidebarLayout.module.css";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader"
import { SidebarLogin, SidebarNav } from "..";
import { SidebarLayoutProps } from "./types";

export const Sidebar = ({testId}: SidebarLayoutProps) => {
    return(<Grid2  data-testid={`${testId}-layout`} className={`${style.sidebarContainer}`}>
                <Box>
                    <SidebarHeader testId={testId} />
                    <SidebarNav testId={testId} />
                    <SidebarLogin testId={testId} imageUrl={"https://mui.com/static/images/avatar/1.jpg"} loginUrl="/"/>
                </Box>
            </Grid2>)
}