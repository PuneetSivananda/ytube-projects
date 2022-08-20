import { Button, styled, Typography } from "@mui/material"
import { Add, Settings } from "@mui/icons-material";
import { theme } from "./theme";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "black",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue"
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white"
    }
  }))
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="otherColor" size="small">
        Settings
      </Button>
      <Button startIcon={<Add />} variant="contained" color="success" size="small">
        Add new post
      </Button>
      <Button variant="outlined" disabled>Outlined</Button>

      <Typography variant="h1" component={"h2"}>
        h1.Heading
      </Typography>
      <Button variant="contained" disabled sx={{
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
          backgroundColor: "lightblue"
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "white"
        }
      }}>
        Another Button
      </Button>
      <BlueButton>MyButton</BlueButton>
      <BlueButton>One More MyButton</BlueButton>
    </div>
  );
}

export default App;
