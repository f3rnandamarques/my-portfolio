import { Container, Grid, Paper, styled } from "@mui/material";


const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(4),
        minHeight: "40vh",
    }));

    const StyledTypography = styled("div")(({ theme }) => ({
        fontSize: "40px",
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        padding: theme.spacing(4)

    }))

    const StyledText = styled("div")(() => ({
        fontSize: "25px",
        textAlign: "justify",
        color: "white"
    }))

    const StyledPaper = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(3),
        textAlign: "center",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    }))

    return (
        <>
            <StyledAbout id="about">

                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <StyledTypography>Sobre mim</StyledTypography>
                        </Grid>
                        <Grid
                            container
                            spacing={4}
                            justifyContent="center"
                            alignItems="center"
                            marginBottom={10}
                            fontFamily={"sans-serif"}
                        >
                            <Grid item xs={12} md={3}>
                                <StyledPaper elevation={3} sx={{ padding: 1, maxHeight: "150px" }}>
                                    <h4>Experiência</h4>
                                    <p>1+ anos</p>
                                    <p>FullStack Development</p>
                                </StyledPaper>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <StyledPaper elevation={3} sx={{ padding: 1, maxHeight: "150px" }}>
                                    <h4>Educação</h4>
                                    <p>Bachelor's Degree</p>
                                    <p>Engenharia de Computação</p>
                                </StyledPaper>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <StyledText >Tenho 27 anos e estou no 6º semestre de Engenharia de Computação, sempre motivada a aprender e me atualizar sobre novas tecnologias. Além dos estudos na faculdade, complemento minha formação com cursos, buscando ampliar constantemente meu conhecimento técnico.

                                Em 2024, tive minha primeira experiência profissional na área de tecnologia como aprendiz na empresa de desenvolvimento Outsourcing Midukan. Essa oportunidade foi fundamental para meu crescimento, pois trabalhei com desenvolvimento FullStack, o que me permitiu adquirir habilidades práticas e aprofundar meu entendimento em ferramentas e tecnologias como Angular, NestJs, Docker, TypeScript, além de reforçar meus conhecimentos em HTML e CSS. A experiência também me ensinou a trabalhar em equipe e a lidar com desafios reais do mercado.</StyledText>

                        </Grid>
                    </Grid>
                </Container>

            </StyledAbout >
        </>
    )
}

export default About
