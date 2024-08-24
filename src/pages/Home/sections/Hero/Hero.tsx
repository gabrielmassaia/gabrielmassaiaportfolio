import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"


const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    return (
      <>
        <StyledHero>

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <StyledImg src={Avatar}/>
                    </Grid>
                    <Grid item xs={8}>
                       <Typography color={"primary"} variant="h1">Gabriel M. Oliveira</Typography>
                       <Typography color={"primary"} variant="h2">I'm a Software Engineer</Typography>
                       <Button>Dowload CV</Button>
                       <Button>Contact me!</Button>
                    </Grid>
                </Grid>
            </Container>

        </StyledHero>
      </>
    )
}

export default Hero

