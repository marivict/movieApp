import { Box, Container, Link, Typography } from "@mui/material"
import style from "./style.module.css";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

export type SidebarHeaderProps = {
    testId: string;
}

export const SidebarHeader = ({testId}: SidebarHeaderProps) => {
    return(
        <Container data-testid={`${testId}-sidebarHeader`} className={`${style.sidebarHeader}`}>
             <header>
                    <Box>
                        <Link href={"#"} underline="none"><MovieFilterIcon fontSize="large" /><Typography variant={"h4"} align="center" className={`${style.TitleHeader}`}>MediaHD</Typography></Link>
                    </Box>
            </header>
        </Container>
    )
}