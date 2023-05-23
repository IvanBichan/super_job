import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

export const InputWithButtons = () => {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        bgcolor: "#FFFFFF",
        alignItems: "center",
        width: 773,
        height: 48,
        border: 1,
        borderColor: "#EAEBED",
        borderRadius: 4,
      }}
    >
      <SearchIcon
        sx={{
          p: "10px",
          ml: 1.75,
          mr: 1.19,
          width: 15,
          height: 15,
          padding: 0,
        }}
      />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Введите название вакансии"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Button
        data-element={"search-button"}
        variant="contained"
        sx={{
          width: 83,
          height: 32,
          bgcolor: "#5E96FC",
          color: "#FFFFFF",
          fontSize: 14,
          fontFamily: "Inter",
          textTransform: "none",
          mr: 1.5,
        }}
      >
        Поиск
      </Button>
    </Paper>
  );
};
