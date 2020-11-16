import React from "react"
import Bookmark from "./Bookmark"

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

function BookmarkList({ bookmarks, deleteBookmark }) {
    if(bookmarks.length)
    return (
        <Paper>
            <List>
                {bookmarks.map(bookmark => (
                    <>
                        <Bookmark
                            id={bookmark.id}
                            link={bookmark.link}
                            key={bookmark.id}
                            deleteBookmark={deleteBookmark}
                        />
                    </>
            ))}
            </List> 
        </Paper>
    );
    return null;
}

export default BookmarkList;