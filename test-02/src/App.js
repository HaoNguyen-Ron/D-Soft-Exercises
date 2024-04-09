import Advertise from 'Components/Advertise'
import Banner from 'Components/Banner'
import Career from 'Components/Career'
import Category from 'Components/Category'
import Course from 'Components/Course'
import Feedback from 'Components/Feedback'
import Hero from 'Components/Hero'
import Layout from 'Layout'
import Partner from 'Components/Partner'

import './App.scss'

function App() {
  return (
    <div className='App'>
      <div className='page__wrapper'>
        <Layout>
          <Banner />

          <Course />

          <Category />

          <Advertise />

          <Hero />

          <Feedback />

          <Partner />

          <Career />
        </Layout>
      </div>
    </div>
  )
}

export default App
