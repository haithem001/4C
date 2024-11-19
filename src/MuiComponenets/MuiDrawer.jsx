import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Groups3Icon from "@mui/icons-material/Groups3";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { allget } from "../api";
import { useEffect, useState } from "react";
import Events from "../components/events";
import AdminEvent from "../components/AdminEvent";
import AdminClub from "../components/AdminClub";
import AdminPartner from "../components/AdminPartner";
import AdminPass from "../components/AdminPass";
import Adminclublist from "../components/adminclublist";
import Adminpartlist from "../components/adminpartlist";
import { deleteCookie } from "../api";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const icon = (it) => {
  switch (it) {
    case "Events":
      return <InsertInvitationIcon color="secondary" />;
    case "Clubs":
      return <Groups3Icon color="secondary" />;
    case "Partners":
      return <HandshakeIcon color="secondary" />;
    case "Password":
      return <PasswordIcon color="secondary" />;
    default:
      return <SupervisorAccountIcon color="secondary" />;
  }
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MuiDrawer = () => {

  
  const [event, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [parts, setParts] = useState([]);
  const [pa, setpa] = useState(localStorage.getItem("page") || "Events");


  const content = (p) => {
    switch (p) {
      case "Events":
        return (
          <>
            <AdminEvent />
            <Events events={event} check={true} />
          </>
        );
      case "Clubs":
        return (
          <>
            <AdminClub />
            <Adminclublist clubs={clubs}/>
          </>
        );
      case "Partners":
        return (
          <>
            <AdminPartner />
            <Adminpartlist parts={parts}/>
          </>
        );
      case "Password":
        return <AdminPass />;
      default:
        return (
          <>
            <AdminEvent />
            <Events events={event} check={true} />
          </>
        );
    }
  };

  useEffect(() => {
    allget()
      .then((data) => {
        setEvents(data.events);
        setClubs(data.clubs);
        setParts(data.parts);
      })
      .catch((err) => {
        console.log("Failed to fetch events");
      });
  }, []);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Page
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
        
          {["Events", "Clubs", "Partners", "Password"].map((text) => (
            <div
              onClick={() => {
                localStorage.setItem("page", text);
                setpa(text);
              }}
            >
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </div>
          ))}
          <div
              onClick={() => {
                deleteCookie("token")
                window.location.reload();
              }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon><LogoutIcon color="secondary"/></ListItemIcon>
                  <ListItemText primary={"Disconnect"}/>
                </ListItemButton>
              </ListItem>
            </div>
        </List>

        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {content(pa)}
      </Main>
    </Box>
  );
};

export default MuiDrawer;