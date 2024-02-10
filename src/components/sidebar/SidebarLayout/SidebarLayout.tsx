import { Box, Container } from "@mui/material";
import style from "./style.module.css";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader"
import { SidebarBody } from "..";

export type SidebarLayoutProps= {
    testId: string;
}
export const Sidebar = ({testId}: SidebarLayoutProps) => {
    return(<Container data-testid={testId} className={`${style.sidebarContainer}`} maxWidth={false}>
        <Box className={`${style.sidebarBox}`}>
            <SidebarHeader testId={testId} />
            <SidebarBody testId={testId} />
        </Box>
    </Container>)
}