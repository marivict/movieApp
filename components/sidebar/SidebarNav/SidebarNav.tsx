import { Container } from "@mui/material";
import style from "./sidebarNav.module.css";
import { SidebarMenu } from "..";
import WindowIcon from '@mui/icons-material/Window';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TheatersIcon from '@mui/icons-material/Theaters';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export type SidebarNavProps = {
    testId:string;
}

export const SidebarNav = ({testId}:SidebarNavProps) => {
    return(<Container className={`${style.SidebarNav}`} disableGutters>
            <SidebarMenu testId={testId} icon={<WindowIcon className={"sidebarMenu__icon"}/>} link="/"/>
            <SidebarMenu testId={testId} icon={<TheatersIcon className={"sidebarMenu__icon"}/>} link="/watchlist" />
            <SidebarMenu testId={testId} icon={<LiveTvIcon className={"sidebarMenu__icon"}/>} link="/watchlist" />
            <SidebarMenu testId={testId} icon={<BookmarkIcon className={"sidebarMenu__icon"}/>} link="/saved" />
    </Container>)
}