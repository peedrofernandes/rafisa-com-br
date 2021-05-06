
import useScript from '../hooks/useScript'

import Header from '../components/Header'
import EntryBanner from '../components/EntryBanner'
import BoxOverlap from '../components/BoxOverlap'
import Info from '../components/Info'
import Products from '../components/Products'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home(props) {

  useScript('/scripts/scroll.js');

  return (
    <div>
      <section id="main-section">
        <Header></Header>
        <EntryBanner></EntryBanner>
      </section>

      <main id="content">

        <BoxOverlap></BoxOverlap>
        <Info></Info>

        <hr />

        <Products></Products>

        <hr />

        <Form></Form>

      </main>

      <Footer></Footer>

    </div>
  )
}
