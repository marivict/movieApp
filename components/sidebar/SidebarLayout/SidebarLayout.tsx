import { Box, Container, Grid2 } from "@mui/material";
import style from "./style.module.css";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader"
import { SidebarBody } from "..";

export type SidebarLayoutProps= {
    testId: string;
}
export const Sidebar = ({testId}: SidebarLayoutProps) => {
    return(<Grid2 size={2} data-testid={testId} className={`${style.sidebarContainer}`}>
                <Box className={`${style.sidebarBox}`}>
                    <SidebarHeader testId={testId} />
                    <SidebarBody testId={testId} />
                </Box>
            </Grid2>)
}