/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.png";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: "100vw",
        marginTop: "3em",
        marginBottom: "auto",
    },
}));

export const About = () => {
    const classes = useStyles();
    const greetings = "Hello there!";
    const aboutme = `I'm ${FirstName} ${LastName}, a multidisciplinary 
                  web developer & game developer. I'm always down for something new and challenging!
                  I can turn your business idea into an intuitive scalable product.
                  I can turn your mockup into a functional responsive website.
                  I also develop Web 3.0 applications also known as DeFi App (DAPP).
                  Most of my projects are web applications, video games or softwares.`;

    return (
        <section id="about">
            <Container component="main" className={classes.main} maxWidth="md">
                <div className="about">
                    <div
                        className="_img"
                        style={{
                            background: "url(" + profile + ")",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></div>
                    <div className="_content_wrapper">
                        <Typography component="h2" variant="h5">
                            <TextDecrypt text={`${greetings}`} />
                        </Typography>
                        <p className="aboutme">{aboutme}</p>
                        <a href="#contact" className="contact-btn">
                            <i className="fas fa-terminal"></i>
                            <Typography component="span">Send me a message.</Typography>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};
