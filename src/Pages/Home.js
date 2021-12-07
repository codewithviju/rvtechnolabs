import React from 'react'

import { Container, Typography, Divider, Card, CardContent, Box, Avatar } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Home = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', textAlign: "center" }}
        >
            •
        </Box>
    );

    return (
        <>
            <Container maxWidth="lg" style={{ textAlign: "center", alignItems: "center" }}>
                <div style={{ padding: "50px" }}>
                    <Typography variant="h3" gutterBottom>
                        Welcome To RV Technolabs
                    </Typography>

                    <Typography variant="p" gutterBottom>
                        Here You Will Find Best IT Services
                    </Typography>
                </div>
                <Divider style={{ marginBottom: "20px", }} />
                <Typography variant="h3" style={{ color: "green" }}>We Provide The Best Service
                </Typography>
                <Box sx={{ flexGrow: 1 }} style={{ margin: "20px 20px" }}>
                    <Grid container spacing={2} columns={18}>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 80 }}>
                                <CardContent>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="h5" component="div" >
                                        Web Development

                                    </Typography>

                                    <Typography variant="body2">
                                        We offer a wide range of services to reach your targeted audience and share your valuable information focusing on retaining your customers. Web development is the process of computer programming, documenting, testing, and bug fixing involved in creating and maintaining applications and frameworks resulting in a Web Application.                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 80 }}>
                                <CardContent>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="h5" component="div">
                                        Web Design


                                    </Typography>

                                    <Typography variant="body2">
                                        Web designing service is not just UI but Graphic Design, Banners, 3D Logo, brochure and Images. When we take your project we also take the responsibility in the related areas like programming and Search Engine Marketing (SEM) where you can promote your website through Search Engine Optimization and advertising.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 80 }}>
                                <CardContent>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="h5" component="div">
                                        CMS Website


                                    </Typography>

                                    <Typography variant="body2">
                                        Content needs lots of changes, sometimes on daily basis. That is why RV Technolabs brings a perfect solution to tide over such problems. The main benefit of CMS is that it allows you to add, delete, edit, modify, and update content quickly anytime, anywhere; it just needs a computer with an internet connection!
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={18}>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 80 }}>
                                <CardContent>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="h5" component="div">
                                        E-Commerce

                                    </Typography>

                                    <Typography variant="body2">
                                        E-commerce websites is our forté and the sites designed by us are easy to navigate, high on quality and loaded with features like shopping cart, payment gateway, inventory list that can be updated, mailing and sign-up options. At competitive price and customized features, sites made by us are par with industry standards and help you achieve a global reach.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 80 }}>
                                <CardContent>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="h5" component="div">
                                        Mobile Application

                                    </Typography>

                                    <Typography variant="body2">
                                        We offer Android & iPhone mobile application development for it's suitable platform. Android supports development for Java-based applications so our mobile application developers can build third party applications on Java which can run on Android platform.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 80 }}>
                                <CardContent style={{ alignItems: "center" }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 56, height: 56 }}
                                    />
                                    <Typography variant="h5" component="div">
                                        Portal Development

                                    </Typography>

                                    <Typography variant="body2">
                                        Web portal gives a perfect platform to provide a vast amount of information on various subjects at one place. We provide various kinds of portal development, including Horizontal and Vertical Portals, Community Portal, Regional Web Portals, Corporate Web Portals, and Domain-specific Portals (school, finance, travel, hospitality services, real estate, etc.)
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </>
    )
}

export default Home
