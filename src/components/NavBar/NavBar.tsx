import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToolBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",

    }))

    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>

            <AppBar position="absolute">
                <StyledToolBar>
                    <MenuItem onClick={() => handleScroll("about")}>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolBar>
            </AppBar>

        </>
    )
}

export default NavBar
