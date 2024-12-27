import { Container, Grid, styled, Typography } from "@mui/material"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(4),
        minHeight: "100vh",
    }))

    return (
        <>
            <StyledProjects id="projects">

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Projetos</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

                        </Grid>
                    </Grid>
                </Container>

            </StyledProjects>
        </>
    )
}

export default Projects