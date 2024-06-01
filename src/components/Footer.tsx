import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Link, Box, Grid, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    return (
        <FooterContainer theme={theme}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ color: 'inherit' }}>
                        { "Brands" } - Your one-stop shop for all your needs!
                    </Typography>
                    <Box pt={2}>
                        <Link href="/" underline="none" sx={{ color: 'inherit' }}>
                            About Us
                        </Link>
                        <Link href="#" underline="none" sx={{ color: 'inherit', ml: 2 }}>
                            Contact Us
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box pt={{ xs: 2, sm: 0 }}>
                        <Link href="#" underline="none" sx={{ color: 'inherit' }}>
                            Terms & Conditions
                        </Link>
                        <Link href="#" underline="none" sx={{ color: 'inherit', ml: 2 }}>
                            Privacy Policy
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="body2" sx={{ color: 'inherit', textAlign: 'center', pt: 2 }}>
                &copy; {new Date().getFullYear()} Ecommerdee. All rights reserved.
            </Typography>
        </FooterContainer>
    );
};

const FooterContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#484848' : '#C8C8C8',
    color: theme.palette.mode === 'dark' ? 'white' : "black",
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign: 'center',
}));

export default Footer;
