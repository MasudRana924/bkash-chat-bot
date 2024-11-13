import { Box, Container, Typography} from "@mui/material";
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                color: "#E2136E",
            }}
        >
            <Container maxWidth="lg">
        
                <Box
                    sx={{
                        mt: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{ fontSize: "14px", lineHeight: "1.5" }}
                    >
                        © Copyright bKash PGW 
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
export default Footer;