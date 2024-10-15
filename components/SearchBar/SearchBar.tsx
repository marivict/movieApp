import { InputBase } from "@mui/material";
import style from "./searchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return <div className={style.searchBar__container}>
        <InputBase 
            className={style.searchBar}
            fullWidth={true}
            placeholder="Search for movies or TV series"
            startAdornment={<SearchIcon sx={{color:"#fff"}}/>}
            sx={{
                color:"#fff",
            }}
        />
    </div>;
}