import { Box, Container, Link, Typography } from "@mui/material"
import style from "./style.module.css";
import MovieIcon from '@mui/icons-material/Movie';

export type SidebarHeaderProps = {
    testId: string;
}

export const SidebarHeader = ({testId}: SidebarHeaderProps) => {
    return(
        <div data-testid={`${testId}-sidebarHeader`} className={`${style.sidebarHeader}`}>
             <header>
                    <Box>
                        <Link href={"#"} underline="none">
                            <MovieIcon fontSize="large" sx={{color:"#FC4747"}} />
                            <Typography variant={"h4"} align="center" className={`${style.TitleHeader}`}></Typography>
                        </Link>
                    </Box>
            </header>
        </div>
    )
}