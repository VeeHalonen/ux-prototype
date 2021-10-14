import { Typography, Grid, Rating } from "@mui/material";

const Review = () => {
  return (
    <>
      <hr style={{ marginTop: 30, marginBottom: 30 }} />
      <Grid container>
        <Grid item xs={4}>
          <Typography gutterBottom>
            <Typography style={{ fontWeight: "bold" }} component="span">
              User name
            </Typography>
            <Typography component="span"> on Jan 1 2021</Typography>
          </Typography>
          <Rating value={3} readOnly />
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph style={{ fontWeight: "bold" }}>
            This product is ok
          </Typography>
          <Typography paragraph>This product is ok</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            nam consequatur totam qui minus nostrum iste, veritatis ipsum, illo
            voluptatem dignissimos suscipit sint architecto quia assumenda, quae
            neque necessitatibus officiis.
          </Typography>
          <Typography paragraph>
            Eius facere, earum quod quibusdam recusandae repellendus a et
            nostrum molestias! Optio, id! Maxime, amet voluptate vitae
            perferendis harum consectetur vel placeat, laudantium nostrum alias,
            debitis cum incidunt aliquam tenetur.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
