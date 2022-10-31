import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Diamond from "./img/diamond.png";
import GoogleDrive from "./img/googleDrive.png";
import DropBox from "./img/dropbox.png";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Download, Facebook, Instagram } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const navItems = ["Start page", "About us", "Pricing", "Products", "Contact"];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          className="my-40 rounded-md"
          sx={{ bgcolor: "#ffff", height: "50%", display: "flex" }}
        >
          <AppBar component="nav" color="transparent" position="relative">
            <Toolbar className="flex justify-around">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{ color: "#3d036e", textTransform: "capitalize" }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Search>
                {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  className="ml-96"
                />
                <SearchIcon />
              </Search>
              <Facebook/>
              <Instagram/>
            </Toolbar>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ marginTop: "2rem" }}>
                <h1
                  style={{ fontSize: "61px", fontWeight: "600" }}
                  className="text-center"
                >
                  Easily manage Projects in the Company
                </h1>
                <p className="text-center">
                  A dedicated application for sharing files and folders <br />{" "}
                  between employees in comapny.
                </p>
                <div className="text-center">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#3d036e",
                      outline: "none",
                      width: "283px",
                      height: "4rem",
                      borderRadius: "2rem",
                      margin: "2rem 0",
                    }}
                  >
                    <span style={{ marginRight: "1rem" }}>
                      <Download />
                    </span>{" "}
                    Download Now
                  </Button>
                </div>
              </Grid>
              <Grid className="flex" item xs={6}>
                <div style={{ marginTop: "5rem" }}>
                  <div
                    style={{
                      background: "#f9f8f8",
                      width: "47px",
                      padding: "3px",
                      borderRadius: "1rem",
                      boxShadow: "5px 1px 1px whitesmoke",
                    }}
                  >
                    {" "}
                    <img style={{ width: "41px" }} src={Diamond} />{" "}
                  </div>
                  <h1
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      marginTop: "2rem",
                    }}
                  >
                    concept app
                  </h1>
                  <br></br>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "inherit",
                      position: "relative",
                      top: "-2rem",
                    }}
                  >
                    {" "}
                    <FolderOpenIcon
                      style={{
                        marginRight: "2px",
                        fontSize: "1rem",
                        opacity: "0.5",
                        marginTop: "6px",
                      }}
                    />{" "}
                    <p style={{opacity:0.5}}>project for agency</p>
                  </div>
                  <div
                    style={{
                      background: "#a3e3a37d",
                      borderRadius: "1rem",
                      padding: "1rem",
                    }}
                  >
                    {" "}
                    <span
                      style={{
                        background: "white",
                        borderRadius: "1rem",
                        padding: "6px",
                      }}
                    >
                      <InsertDriveFileIcon color="success" />
                    </span>{" "}
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "green",
                      }}
                    >
                      Documents
                    </span>{" "}
                    <p style={{ opacity: 0.5, marginLeft: "2rem" }}>
                      34 searches
                    </p>{" "}
                  </div>
                </div>
                <Item
                  style={{
                    height: "100px",
                    height: "290px",
                    padding: "2rem",
                    margin: "1rem",
                  }}
                >
                  <div>
                    <img
                      src={GoogleDrive}
                      style={{
                        width: "143px",
                        paddingRight: "4rem",
                        paddingLeft: "1rem",
                      }}
                    />
                    <h1
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        margin: "1rem",
                        marginTop: "4rem",
                      }}
                    >
                      google drive
                    </h1>
                  </div>
                  <div>
                    <BorderLinearProgress variant="determinate" value={50} />
                  </div>
                  <span style={{ float: "left" }}>7 gb</span>{" "}
                  <span style={{ float: "right" }}>10 gb</span>
                </Item>

                <Item
                  style={{
                    height: "193px",
                    width: "147px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    marginTop: "6rem",
                  }}
                >
                  <div>
                    <img src={DropBox} style={{ width: "49px" }} />
                    <h1
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        margin: "1rem",
                      }}
                    >
                      Dropbox
                    </h1>
                  </div>
                  <div>
                    <BorderLinearProgress variant="determinate" value={50} />
                    <span style={{ float: "left" }}>7 gb</span>{" "}
                    <span style={{ float: "right" }}>10 gb</span>
                  </div>
                  <div>
                <AddCircleIcon style={{fontSize: '2rem',marginTop: '3rem',marginRight: '6rem',color:'#3d036e'}}/>
                  </div>
                </Item>
              </Grid>
              <Grid style={{ marginLeft: "9rem" }} className="" item xs={2}>
                <h1>
                  <TaskAltIcon />
                  Free to use
                </h1>{" "}
                <br />
                <span>Available for download in the store.</span>
              </Grid>
              <Grid className="" item xs={2}>
                <h1>
                  <TaskAltIcon />
                  Unlimited access
                </h1>{" "}
                <br />
                <span>With a paid premium subscription.</span>
              </Grid>
              <Grid item xs={3}>
                <Item
                  style={{
                    display: "flex",
                    position: "relative",
                    bottom: "10rem",
                    left: "8rem",
                  }}
                >
                  <div>
                    <img src={DropBox} style={{ width: "49px" }} />
                  </div>
                  <div>
                    <h1 style={{ fontSize: "15px", fontWeight: "500" }}>
                      Alex Mendez
                    </h1>
                    <p>34min ago</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <p className="text-right">
                    <BorderLinearProgress style={{height: '5px',marginRight: '2rem'}} variant="determinate"value={50}/><span><ChatBubbleOutlineIcon style={{ position: 'relative',bottom: '1rem'}} /></span>
                  </p>
                </div>
              </Grid>
            </Grid>
          </AppBar>
        </Box>
      </Container>
    </>
  );
}

export default App;
