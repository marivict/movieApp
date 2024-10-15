"use client";

import { InputBase } from "@mui/material";
import style from "./searchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export const SearchBar = () => {
    const [value, setValue] = useState("")
    console.log(value);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return <div className={style.searchBar__container}>
        <InputBase 
            className={style.searchBar}
            fullWidth={true}
            placeholder="Search for movies or TV series"
            startAdornment={<SearchIcon sx={{color:"#fff"}}/>}
            sx={{
                color:"#fff",
            }}
            value={value}
            onChange={onChange}
        />
    </div>;
}