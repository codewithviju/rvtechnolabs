import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'

const Footer = () => {
    return (
        <>
            <AppBar position="static" color="primary" style={{ marginTop: "10px" }}>
                <Container maxWidth="sm">
                    <Toolbar>
                        <Typography variant="body1" color="inherit">
                            © 2021 Rv Technolabs - All Rights Reserved
                        </Typography>
                    </Toolbar>
                </Container>

            </AppBar>

        </>
    )
}

export default Footer
