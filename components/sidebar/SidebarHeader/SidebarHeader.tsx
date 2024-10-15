import { Box, Container, Link, Typography } from "@mui/material"
import style from "./sidebarHeader.module.css";
import MovieIcon from '@mui/icons-material/Movie';
import { SidebarHeaderProps } from "./types";

export const SidebarHeader = ({testId}: SidebarHeaderProps) => {
    return(
        <div data-testid={`${testId}-header`} className={`${style.sidebarHeader}`}>
             <header>
                    <Box>
                        <Link href={"#"} underline="none">
                            <MovieIcon fontSize="large" sx={{color:"#FC4747"}} />
                        </Link>
                    </Box>
            </header>
        </div>
    )
}