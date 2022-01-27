import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" sx={{ minHeight: 75 }}>
                <Toolbar variant="dense">

                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, marginTop: 3 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{ marginTop: 3 }}>
                        Synthetic Text Generation
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}