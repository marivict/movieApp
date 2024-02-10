import { Box, Container } from "@mui/material";
import style from "./style.module.css";


export const Sidebar = () => {
    return(<Container className={`${style.sidebarBox}`}>
        <Box className={`${style.sidebarBox}`}>
           
            <div className={`${style.sidebarBody}`}>
                
            </div>
        </Box>
    </Container>)
}