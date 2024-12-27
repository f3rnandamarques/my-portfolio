import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300)
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    return (
        isVisible && (
            <Fab
                color="secondary"
                size="large"
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "16px",
                    right: "16px",
                    zIndex: 1000,
                }}
            >
                <ArrowUpwardIcon />
            </Fab>
        )
    );
};

export default BackToTopButton;