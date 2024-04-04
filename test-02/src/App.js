import Layout from 'Layout'

import Banner from 'Components/Banner/Banner'
import Category from 'Components/Category'
import Course from 'Components/Course/Course'

import './App.scss'
import Advertise from 'Components/Advertise'
import Feedback from 'Components/Feedback'
import Partner from 'Components/Partner'
import Career from 'Components/Career'

function App() {
  return (
    <div className='App'>
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
  )
}

export default App
