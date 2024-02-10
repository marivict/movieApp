import { Container } from "@mui/material";
import style from "./style.module.css";
export type SidebarBodyProps = {
    testId:string;
}

export const SidebarBody = ({testId}:SidebarBodyProps) => {
    return(<Container className={`${style.SidebarBody}`}>
            
    </Container>)
}