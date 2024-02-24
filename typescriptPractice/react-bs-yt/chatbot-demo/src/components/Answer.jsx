import React from "react";
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

const MyButton = styled(() =>({
        "button": {
            borderColor: "#FFB549",
            color: "#FFB549",
            fontWeight: 600,
            marginBottom: "8px",
            "&:hover": {
                backgroundColor: "#FFB549",
                color: "#fff"
            }
        }
    }),
);

const Answer = (props) => {

    return (
        <Button c variant="outlined" onClick= {() => props.select(props.content, props.nextId)}>
            {props.content}
        </Button>
    ); 
};

export default Answer;