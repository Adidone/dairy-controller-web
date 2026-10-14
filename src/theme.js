import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: true,
    palette: {
        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },
    },
});

export default theme;