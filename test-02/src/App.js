import Layout from 'Layout'

import Banner from 'Components/Banner/Banner'
import Category from 'Components/Category'
import Course from 'Components/Course/Course'

import './App.scss'
import Advertise from 'Components/Advertise'
import Feedback from 'Components/Feedback'

function App() {
  return (
    <div className='App'>
      <Layout>
        <Banner />

        <Course />

        <Category />

        <Advertise />

        <Feedback />
      </Layout>
    </div>
  )
}

export default App
