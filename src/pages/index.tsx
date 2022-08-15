import { Divider, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Banner from '../components/Banner';
import BaseGrid from '../components/BaseGrid';
import EmailContact from '../components/EmailContact';
import Location from '../components/Location';
import Presentation from '../components/Presentation';
import Product from '../components/Product';

const produtos = [
  {
    title: "Sacaria convencional",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim placeat natus vero deserunt nulla harum, laudantium consectetur odio. Veritatis excepturi necessitatibus quisquam est animi voluptate, alias debitis dolorem sequi.",
    buttonText: "Saiba mais"
  },
  {
    title: "Sacaria laminada",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim placeat natus vero deserunt nulla harum, laudantium consectetur odio. Veritatis excepturi necessitatibus quisquam est animi voluptate, alias debitis dolorem sequi.",
    buttonText: "Saiba mais"
  },
  {
    title: "Sacaria impressa",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae enim placeat natus vero deserunt nulla harum, laudantium consectetur odio. Veritatis excepturi necessitatibus quisquam est animi voluptate, alias debitis dolorem sequi.",
    buttonText: "Saiba mais"
  }
]

const Home: NextPage = () => {
  return (
    <div>
      <Banner>
        <BaseGrid sx={{width: "100%", height: "100%"}}>
          <Grid item md={12} sm={8} xs={4} sx={{justifyContent: "center"}}>
            <Typography variant="h2" sx={{ color: "white" }}>
              Frase de efeito aqui!
            </Typography>
          </Grid>
        </BaseGrid>
      </Banner>

      <Divider />

      {/* <Product title="Produto 1" buttonText="Saiba Mais"/>
      <Product buttonText="Saiba Mais" reverse />
      <Product buttonText="Saiba Mais"/> */}

      <section>
        {
          produtos.map(({ title, description, buttonText}, key) => (
            <Product
              key={key}
              reverse={key % 2 !== 0 ? true : false}
              title={title}
              description={description}
              buttonText={buttonText}
            />
          ))
        }
      </section>

      <Divider />

      <Presentation />

      <Divider />

      <Location />

      <Divider />

      <EmailContact />

    </div>
  )
}

export default Home
