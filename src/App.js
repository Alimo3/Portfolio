import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sizing } from "@material-ui/system";
import { Fade } from "@mui/material";
import { Image } from "mui-image";
import "./test.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { HelpOutline } from "@material-ui/icons";

{
  /*Header*/
}

const theme = createTheme();

export default function Album() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppBar
          className="appBar"
          position="sticky"
          color="inherit"
          elevation={0}
        >
          <Toolbar>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "10%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="25px"
                fontWeight="bold"
              >
                IMPREZA
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "30%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="20px"
                fontWeight="bold"
              >
                Home
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="20px"
                fontWeight="bold"
                sx={{ ml: "10%" }}
              >
                Pages
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="20px"
                fontWeight="bold"
                sx={{ ml: "10%" }}
              >
                Portfolio
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="20px"
                fontWeight="bold"
                sx={{ ml: "10%" }}
              >
                Blog
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="20px"
                fontWeight="bold"
                sx={{ ml: "10%" }}
              >
                Elements
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <Typography
                variant="h1"
                color="black"
                component="div"
                fontSize="20px"
                fontWeight="bold"
                sx={{ ml: "10%" }}
              >
                Shop
              </Typography>
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="100%"
              edge="start"
              color="inherit"
              aria-label="menu"
              position="static"
              sx={{ ml: "1%" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="lg">
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="1A1A1A"
                fontWeight="600"
                gutterBottom
              >
                Portfolio Grid 4
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                This grid shows the items pages in a popup
              </Typography>
            </Container>
          </Box>
          {/* End Header*/}
          {/* Body */}
          <Grid container border-spacing={1}>
            {itemData.map((item, title) => (
              <Grid item key={item.Image} xs={12} sm={6} md={4} lg={2.4}>
                <Button>
                  <div class="container">
                    <Image
                      easing="ease-in-out"
                      duration={325}
                      src={`${item.Image}?w=600&h=600&fit=crop&auto=format`}
                      alt={item.Typography}
                    />
                    <div class="overlay">
                      <h6 class="title">Project Example - {item.title} </h6>
                    </div>
                  </div>
                </Button>
              </Grid>
            ))}
          </Grid>
        </main>
      </ThemeProvider>
    </>
  );
}

const itemData = [
  {
    Image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    Image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    Image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    Image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    Image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    Image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    Image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    Image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    Image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    Image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    Image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    Image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    Image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    Image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    Image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
{
  /* End Body */
}
