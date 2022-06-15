/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import MatrixCointThumbnail from "../../assets/recentprojects/MatrixCoinThumbnail.png";
import PolycornFinanceThumbnail from "../../assets/recentprojects/PolycornFinanceThumbnail.png";
import BabysealNFTThumbnail from "../../assets/recentprojects/BabysealNFTThumbnail.png";
import BinanceCloneThumbnail from "../../assets/recentprojects/BinanceCloneThumbnail.png";
import TropicalInteriorThumbnail from "../../assets/recentprojects/TropicalInteriorThumbnail.png";
import PianoVisualizerThumbnail from "../../assets/recentprojects/PianoVisualizerThumbnail.png";
import DodgeRThumbnail from "../../assets/recentprojects/DodgeRThumbnail.png";
import SightReadTrainerThumbnail from "../../assets/recentprojects/SightReadTrainerThumbnail.png";
import SwitchThumbnail from "../../assets/recentprojects/SwitchThumbnail.png";

const useStyles = makeStyles((theme) => ({
    main: {
        maxWidth: "100vw",
        marginTop: "3em",
        marginBottom: "auto",
    },
}));

export const Works = () => {
    const classes = useStyles();
    const projects = [
        {
            title: "Matrix Coin - Showcase",
            description: `This website was made using plain HTML | CSS | JS and is deployed on Vercel. It's a showcase website for an official crypto project deployed on Binance Smart Chain.`,
            alter: "Matrix Coin Showcase",
            image: `${MatrixCointThumbnail}`,
            url: "https://matrixcoin-io.vercel.app/",
        },
        {
            title: "Polycorn Finance - DeFi Application",
            description: `This project was made using React | Web3js | Twitter API and is deployed on Vercel. 
            It's a DAPP (DeFi Application) designed and developed for an official project that should of been deployed on Polygon Blockchain. 
            Unfortunately, the project owner ran into issues that forced me to interrupt the development. Therefore, the website is not responsive`,
            alter: "Matrix Coin Showcase",
            image: `${PolycornFinanceThumbnail}`,
            url: "https://polycorn-finance.vercel.app/",
        },
        {
            title: "Babyseal NFT - DeFi Application",
            description: `This project was made using React | Styled Components | Web3js and is deployed on Vercel. 
            It's a DAPP (DeFi Application) designed and developed for an official NFT project deployed on Ethereum Blockchain. 
            This website acts as a Landing page and give the ability to mint the NFT collection directly from the website.`,
            alter: "Babyseal NFT DeFi Application",
            image: `${BabysealNFTThumbnail}`,
            url: "https://baby-seal-website.vercel.app/",
        },
        {
            title: "Binance Clone - Clone",
            description: `This project was made using React | Redux Toolkit | Typescript | Styled Components and is deployed on Vercel. 
            This clone is fully responsive. I took advantage of Trading View Widgets to render charts and Google Services to provide an authentication method.`,
            alter: "Binance Clone - Clone",
            image: `${BinanceCloneThumbnail}`,
            url: "https://binance-clone-react.vercel.app/",
        },
        {
            title: "Tropical Interior - E-commerce",
            description: `This project is powered by the LAMP stack and is deployed on a VPS. 
            This e-commerce website was developed for a school annual exam. This website include both a front-end application and an admin dashboard.`,
            alter: "TropicalInterior E-commerce",
            image: `${TropicalInteriorThumbnail}`,
            url: "https://tropicalinterior.shop/",
        },
        {
            title: "DodgeR - Mobile Game",
            description: `This mobile game was developed using the Unity Game Engine in C#. The game is exclusively available on Android and published on Google Play. 
            This project took advantage of Google Services to power authentication and leaderboard using GoogleAuth and Firebase.`,
            alter: "DodgeR - Mobile Game",
            image: `${DodgeRThumbnail}`,
            url: "https://play.google.com/store/apps/details?id=com.SubwayGames.dodgeR",
        },
        {
            title: "Live Piano Visualizer - Desktop Software",
            description: `This desktop software was developed using the Unity Game Engine in C# and is available on Itch.io. The software is separated in two categories. 
            The first is in 2D and render a realtime visual representation of MIDI inputs. The second is a 3D scene with a customizable Grand Piano in a Forest.`,
            alter: "Live Piano Visualizer - Desktop Software",
            image: `${PianoVisualizerThumbnail}`,
            url: "https://apz.itch.io/livepianovisualizer",
        },
        {
            title: "Sight Reading Trainer - Mobile Application",
            description: `This mobile educational application was developed using the Unity Game Engine in C# and is available exclusively for Android users on the Google Play store. 
            You might be interesed to use this app if you want to improve your sightreading speed when reading music scores.`,
            alter: "Sight Reading Trainer - Mobile Application",
            image: `${SightReadTrainerThumbnail}`,
            url: "https://play.google.com/store/apps/details?id=com.SubwayGames.SightReadTrainer",
        },
        {
            title: "Switch - Video Game",
            description: `This desktop game was developed using the Unity Game Engine in C# and is available on Itch.io. 
            This game is a classic first person platformer but with a twist. Two dimensions, and you switch between them to complete the levels. 
            The game was originally designed for speedrunners.`,
            alter: "Switch - Video Game",
            image: `${SwitchThumbnail}`,
            url: "https://apz.itch.io/switch",
        },
    ];

    return (
        <section id="works">
            <Container component="main" className={classes.main} maxWidth="md">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="__img_wrapper">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.image} alt={project.alter} />
                            </a>
                        </div>
                        <div className="__content_wrapper">
                            <h3 className="title">
                                <TextDecrypt text={project.title} />
                            </h3>
                            <p className="description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
};
