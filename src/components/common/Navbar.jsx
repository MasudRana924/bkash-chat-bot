import { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../../assets/logo.png'
export const Navbar = () => {
    const [open, setOpen] = useState(false);
    //   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
            setOpen(false);
        }
    };

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "#E2136E",
                    backdropFilter: "blur(4px)",
                    // boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
                    // backgroundImage: "none",
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            maxHeight: 40,
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0,
                            }}
                        >
                            <Link to="/">
                                {/* <Typography variant="h5" className="text-white text-xl">
                                    bKash PGW
                                </Typography> */}
                                <img src={logo} alt=""  />
                            </Link>
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <MenuItem
                                    onClick={() => scrollToSection("features")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    {/* Add content if necessary */}
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("testimonials")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    {/* Add content if necessary */}
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("highlights")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Tolenized
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("pricing")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Auth & Capture
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Dynamic Charge
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                       Webhook
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("faq")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                      Recurring
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box sx={{ display: { sm: "", md: "none" } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: "30px", p: "4px" }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: "60dvw",
                                        p: 2,
                                        backgroundColor: "#E2136E",
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            flexGrow: 1,
                                        }}
                                    >
                                        {/* Add additional content if needed */}
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection("features")}>
                                    Tolenized
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("testimonials")}>
                                        Auth & Capture
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("highlights")}>
                                        Dynamic Charge
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("pricing")}>
                                      Webhook
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("faq")}>
                                        Recurring
                                    </MenuItem>
                                    <Divider />
                                    {/* {!isAuthenticated && (
                                        <>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    component={Link}
                                                    to="/material-ui/getting-started/templates/sign-up/"
                                                    target="_blank"
                                                    sx={{ width: "100%" }}
                                                >
                                                    Sign up
                                                </Button>
                                            </MenuItem>
                                            <MenuItem>
                                                <Button
                                                    color="primary"
                                                    variant="outlined"
                                                    component={Link}
                                                    to="/material-ui/getting-started/templates/sign-in/"
                                                    target="_blank"
                                                    sx={{ width: "100%" }}
                                                >
                                                    Sign in
                                                </Button>
                                            </MenuItem>
                                        </>
                                    )} */}
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navbar;
