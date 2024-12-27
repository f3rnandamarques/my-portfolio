import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import { AnimatedBackground } from '../../../../components/AnimatedBackground/AnimatedBackground';
import StyledButton from '../../../../components/StyledButton/StyledButton';

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0"
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
        <>
            <StyledHero>

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Fernanda Marques</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Im a Software Engineer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("download")}>
                                        <ArrowDownwardTwoToneIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("contact me")}>
                                        <EmailTwoToneIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </StyledHero>
        </>
    )
}

export default Hero
