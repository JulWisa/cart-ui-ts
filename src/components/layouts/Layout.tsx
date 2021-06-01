import React from 'react';
import {Paper} from '@material-ui/core';

function Layout(props: any) {
    return (
        <Paper className="layout">
            {props.children}
        </Paper>
    );
}

export default Layout;
