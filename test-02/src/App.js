
import Advertise from 'Components/Advertise'
import Banner from 'Components/Banner/Banner'
import Career from 'Components/Career'
import Category from 'Components/Category'
import Course from 'Components/Course/Course'
import Feedback from 'Components/Feedback'
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

          <Feedback />

          <Partner />

          <Career />
        </Layout>
      </div>
    </div>
  )
}

export default App
