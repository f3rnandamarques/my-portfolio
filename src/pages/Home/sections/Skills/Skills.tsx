import { Button, Container, Grid, styled } from "@mui/material";

const Skills = () => {
    const skills = [
        "Javascript",
        "Typescript",
        "React",
        "NestJs",
        "Git",
        "CSS",
        "Angular",
        "Ionic",
        "Material UI",
    ]

    const StyledTypography = styled("div")(({ theme }) => ({
        fontSize: "40px",
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        padding: theme.spacing(4),
    }))

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(4),
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: 'sans-serif',
        fontSize: "40px"
    }))

    const StyledButton = styled(Button)(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        padding: theme.spacing(1, 2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
        },
    }));

    return (
        <StyledSkills id="skills">
            <StyledTypography>Skills</StyledTypography>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center">
                    {skills.map((skill, index) => (
                        <Grid item xs={4} sm={3} md={2} key={index}>
                            <StyledButton fullWidth>{skill}</StyledButton>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
