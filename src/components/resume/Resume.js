import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";
import ResumePDF from "./../../assets/CV.pdf";
import { ResumeIcon } from "../content/ResumeButton";

const useStyles = makeStyles((theme) => ({
    footerText: {
        position: "fixed",
        bottom: theme.spacing(6),
        left: theme.spacing(6),
        transition: "all 0.5s ease",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        transition: "transform 0.2s",

        "&:hover": {
            color: theme.palette.primary.main,
            transform: "scale(1.15)",
        },

        "& > svg": {
            marginRight: "0.5rem",
        },
    },
}));

export const Resume = () => {
    const classes = useStyles();

    return (
        <Link color="inherit" underline="none" href={`${ResumePDF}`} target="_blank" rel="noopener noreferrer" className={classes.footerText}>
            <ResumeIcon />
            <Typography component="span">
                <TextDecrypt text={"Resume | CV"} />
            </Typography>
        </Link>
    );
};
