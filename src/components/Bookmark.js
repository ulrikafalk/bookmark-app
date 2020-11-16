import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";


function Bookmark({ link, deleteBookmark, id }) {
    return (
        <ListItem key="44">
            <>             
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText button component="a" href={link}>{link}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={() => deleteBookmark(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </>               
        </ListItem>
    );
}

export default Bookmark;