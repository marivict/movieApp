import { Container, Grid } from "@mui/material";
import { Sidebar } from "../sidebar";
import style from "./style.module.css"

export type HomeProps = {
    testId: string;
}

export const Home = ({testId}: HomeProps) => {
    return(<Container maxWidth={false} className={`${style.home}`}>
        <Grid container>
            <Grid item md={3} className={`${style.Sidebar}`}>
                <Sidebar testId={testId}></Sidebar>
            </Grid>
            <Grid item md={9}></Grid>
        </Grid>
    </Container>)
}