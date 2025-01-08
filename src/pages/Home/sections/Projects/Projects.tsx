import { Box, Button, Card, CardContent, CardMedia, Container, Grid, styled, Typography } from "@mui/material";

const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(4),
        minHeight: "100vh",
    }))

    const StyledTypography = styled("div")(({ theme }) => ({
        fontSize: "40px",
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        padding: theme.spacing(4),
    }))

    const projects = [
        {
            title: "Jogo do número secreto",
            duration: "Dez 2024 - Jan 2025",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum.",
            technologies: "JavaScript e HTML",
            image: "https://via.placeholder.com/300x200",
            projectLink: "https://jogo-do-numero-secreto-jet-two.vercel.app/",
            codeLink: "https://github.com/f3rnandamarques/jogo-do-numero-secreto",
        },
        {
            title: "PacMan",
            duration: "Jan 2023 - Jan 2023",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum.",
            technologies: "JavaScript, HTML e CSS",
            image: "https://via.placeholder.com/300x200",
            projectLink: "#",
            codeLink: "https://github.com/f3rnandamarques/pacman",
        },
    ];

    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <StyledTypography>Projetos</StyledTypography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="primary.contrastText" variant="h6" textAlign="center" marginBottom={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Grid>

                    <Grid container spacing={4} justifyContent="center">
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ backgroundColor: "#2c2c2c", color: "white" }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={project.image}
                                        alt={project.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ color: "#aaa", marginBottom: "8px" }}>
                                            {project.duration}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginBottom: "8px" }}>
                                            {project.description}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                                            Technologies: {project.technologies}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: "flex", justifyContent: "space-around", padding: "16px" }}>
                                        <Button variant="contained" color="primary" href={project.projectLink}>
                                            View Project
                                        </Button>
                                        <Button variant="outlined" color="secondary" href={project.codeLink}>
                                            View Code
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects