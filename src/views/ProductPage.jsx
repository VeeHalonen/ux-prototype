import { Grid, Typography, Card } from "@mui/material";
import { useContext } from "react";
import ProductDetailsBox from "../components/ProductDetailsBox";
import ProductInfo from "../components/ProductInfo";
import ProductPagePhotos from "../components/ProductPagePhotos";
import {
  getRandomProduct,
  GlobalStateContext,
  getLastProduct,
} from "../helpers";

const ProductPage = () => {
  const context = useContext(GlobalStateContext);
  const product =
    getLastProduct(context?.globalState?.products) || getRandomProduct(); // TODO: ?
  console.log("Product:", product);
  return (
    <Card style={{ padding: 50 }}>
      <Grid
        container
        style={{ marginBottom: 40 }}
        spacing={3}
        justifyContent="start"
      >
        <Grid item>
          <ProductPagePhotos product={product} />
        </Grid>
        <Grid item container xs={12} md={7} lg={8}>
          <ProductInfo product={product} />
        </Grid>
      </Grid>
      <Grid container item lg={11}>
        <Typography variant="h5" paragraph>
          Details
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, id? Beatae dolorem autem nemo distinctio earum officia
          quibusdam doloremque neque, facere eveniet possimus consectetur fugiat
          totam saepe minus, voluptas perferendis! Recusandae est quia
          distinctio officia accusamus nulla voluptas eveniet natus laborum? Sit
          illo enim vel ullam, quo est nam dolor assumenda voluptatibus porro,
          facere voluptatum, eius libero amet. Ratione, quasi?
        </Typography>
        <Typography paragraph>
          Non excepturi repellat pariatur ducimus distinctio inventore
          recusandae vero obcaecati sequi deleniti exercitationem amet
          perspiciatis eius dolores doloribus praesentium vitae placeat
          expedita, deserunt quod rem? Temporibus amet culpa mollitia nam.
        </Typography>
        <ProductDetailsBox product={product} />
      </Grid>
    </Card>
  );
};

export default ProductPage;
