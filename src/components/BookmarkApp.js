import React, { useState, useEffect, useRef } from "react"
import BookmarkForm from "./BookmarkForm"
import BookmarkList from "./BookmarkList"

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from 'uuid';

function BookmarkApp() {
    const initialBookmarks = JSON.parse(window.localStorage.getItem("bookmarks") || "[]");
    const [bookmarks, setBookmarks] = useState(initialBookmarks);
    const renderNumBookmarks = useRef(initialBookmarks.length);

    useEffect(() => {
        window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addBookmark = newBookmarkLink => {
        setBookmarks([...bookmarks, { id: uuidv4(), link: newBookmarkLink }]);
        renderNumBookmarks.current = renderNumBookmarks.current + 1;
    };

    const deleteBookmark = BookmarkId => {
        const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== BookmarkId);
        setBookmarks(updatedBookmarks);
        renderNumBookmarks.current = renderNumBookmarks.current - 1;
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='default' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit' variant='h5'>The Fav Bookmark App contains {renderNumBookmarks.current} links</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <BookmarkForm addBookmark={addBookmark} />
                    <BookmarkList bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default BookmarkApp;