import { Box, Container } from "@mui/material";
import style from "./style.module.css";
type ISidebar = {
    test: string;
}

export const Sidebar = ({test}:ISidebar) => {
    return(<Container className={`${style.sidebarBox}`}>
        <Box className={`${style.sidebarBox}`}>
            <header className={`${style.sidebarHeader}`}>

            </header>
            <div className={`${style.sidebarBody}`}>
                
            </div>
        </Box>
    </Container>)
}