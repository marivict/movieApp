import { Container } from "@mui/material";
import style from "./style.module.css";
import { SidebarMenu } from "..";
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
export type SidebarBodyProps = {
    testId:string;
}

export const SidebarBody = ({testId}:SidebarBodyProps) => {
    return(<Container className={`${style.SidebarBody}`} disableGutters>
            <SidebarMenu testId={testId} title={"Movies"} icon={<MovieIcon className={"sidebarMenu__icon"}/>} active/>
            <SidebarMenu testId={testId} title={"Watchlist"} icon={<LiveTvIcon className={"sidebarMenu__icon"}/>} />
    </Container>)
}