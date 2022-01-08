import {
  COLOR_ONE,
  COLOR_TWO,
  COLOR_THREE,
  COLOR_FOUR,
  COLOR_FIVE,
} from "../ui/colors";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

function Header(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: COLOR_THREE,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sato
            </Typography>
            <Button color="inherit">Postagens</Button>
            <Button color="inherit">Livros</Button>
            <Button color="inherit">Análises</Button>
            <Button color="inherit">Sobre</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
