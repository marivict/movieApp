import { Container } from "@mui/material"
import style from "./style.module.css";

export const SidebarHeader = () => {
    return(
        <Container>
             <header className={`${style.sidebarHeader}`}>
                    The new world
            </header>
        </Container>
    )
}