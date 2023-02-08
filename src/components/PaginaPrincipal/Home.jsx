import React from 'react'
import Categoria from './Categoria'
import SlideCard from './SlideCard'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d-flex">
          <Categoria/>
          <SlideCard/>
        </div>
      </section>
    </>
  )
}

export default Home