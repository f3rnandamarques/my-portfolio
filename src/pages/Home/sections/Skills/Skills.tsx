import { Box, Chip, Container, Grid, styled, Typography } from "@mui/material"

const Skills = () => {

    const StyledSkills = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(4),
        minHeight: "100vh",
    }))

    const CustomChip = styled(Chip)(({ theme }) => ({
        margin: theme.spacing(3),
        fontSize: '20px',
        color: "white"
        // display: "flex",

    }))

    return (
        <>
            <StyledSkills id="skills">

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Skills</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box>
                                <CustomChip label="HTML" color="secondary" />
                                <CustomChip label="Angular" color="secondary" />
                                <CustomChip label="JavaScript" color="secondary" />
                                <CustomChip label="TypeScript" color="secondary" />
                                <CustomChip label="React" color="secondary" />
                                <CustomChip label="NestJs" color="secondary" />
                                <CustomChip label="Node" color="secondary" />
                                <CustomChip label="Git" color="secondary" />
                            </Box>

                        </Grid>
                    </Grid>
                </Container>

            </StyledSkills>
        </>
    )
}

export default Skills