import { Card, Typography } from "@mui/material";

const About = () => {
  return (
    <Card style={{ padding: 50, paddingBottom: 100 }}>
      <Typography variant="h5" paragraph>
        Company
      </Typography>
      <Typography paragraph>
        We are fans of fans. Fans are all we know, fans are all we love. Fans
        only. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Doloremque nam consequatur totam qui minus nostrum iste, veritatis
        ipsum, illo voluptatem dignissimos suscipit sint architecto quia
        assumenda, quae neque necessitatibus officiis.
      </Typography>
      <Typography paragraph>
        Eius facere, earum quod quibusdam recusandae repellendus a et nostrum
        molestias! Optio, id! Maxime, amet voluptate vitae perferendis harum
        consectetur vel placeat, laudantium nostrum alias, debitis cum incidunt
        aliquam tenetur.
      </Typography>
      <Typography variant="h5" paragraph>
        Contact
      </Typography>
      <Typography>
        Jokutie 1
        <br />
        00100 Tampere
        <br />
        Finland
        <br />
        <br />
        +358123456789
      </Typography>
    </Card>
  );
};

export default About;
