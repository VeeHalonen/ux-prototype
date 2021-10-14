import { Grid, Typography } from "@mui/material";
import ProductInfo from "../components/ProductInfo";
import ProductPagePhotos from "../components/ProductPagePhotos";

const ProductPage = () => {
  return (
    <div>
      <Grid container style={{ marginBottom: 40 }} spacing={5}>
        <Grid item>
          <ProductPagePhotos />
        </Grid>
        <Grid item xs={12} md={7}>
          <ProductInfo />
        </Grid>
      </Grid>
      <Typography variant="h5" paragraph>
        Details
      </Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        id? Beatae dolorem autem nemo distinctio earum officia quibusdam
        doloremque neque, facere eveniet possimus consectetur fugiat totam saepe
        minus, voluptas perferendis! Recusandae est quia distinctio officia
        accusamus nulla voluptas eveniet natus laborum? Sit illo enim vel ullam,
        quo est nam dolor assumenda voluptatibus porro, facere voluptatum, eius
        libero amet. Ratione, quasi?
      </Typography>
      <Typography paragraph>
        Explicabo alias illo quasi. Obcaecati quas ipsum nisi quod repellat
        necessitatibus numquam? Aperiam beatae voluptatum reiciendis nam enim,
        eligendi eius ab rerum, dolores deserunt non tenetur animi quisquam
        eveniet asperiores! Facere quia quae a perspiciatis minima tenetur
        placeat tempore, porro soluta esse rem autem inventore quam quaerat,
        aliquid, necessitatibus quibusdam dignissimos veritatis voluptas sint ea
        accusantium similique incidunt vitae? Nulla!
      </Typography>
      <Typography paragraph>
        Non excepturi repellat pariatur ducimus distinctio inventore recusandae
        vero obcaecati sequi deleniti exercitationem amet perspiciatis eius
        dolores doloribus praesentium vitae placeat expedita, deserunt quod rem?
        Temporibus amet culpa mollitia nam.
      </Typography>
    </div>
  );
};

export default ProductPage;
