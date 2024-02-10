import { Container, Grid } from "@mui/material";
import { Sidebar } from "../sidebar";

export const Home = () => {
    return(<Container>
        <Grid container>
            <Grid item md={4}>
                <Sidebar></Sidebar>
            </Grid>
            <Grid item md={8}></Grid>
        </Grid>
    </Container>)
}