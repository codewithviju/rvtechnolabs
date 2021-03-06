import React from "react";
import Card from "@mui/material/Card";
import Servicelist from "../APIs/Serviceslist";
import Servicecard from "../Components/Servicecard";
import Typography from "@mui/material/Typography";
import { Box, Grid, Container } from "@mui/material";
const Services = (props) => {
  return (
    <>
      <div>
        <Container
          maxWidth="lg"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <Typography variant="h4">
            {props.heading}
          </Typography>
          <Box sx={{ flexGrow: 1 }} style={{ margin: "20px 20px" }}>
            <Grid container spacing={2} columns={18}>
              {Servicelist.map((e) => {
                return (
                  <>
                    <Grid item xs={6}>
                      <Card sx={{ minWidth: 80 }}>
                        <Servicecard key={e.id} title={e.title} desc={e.desc} />
                      </Card>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Services;
