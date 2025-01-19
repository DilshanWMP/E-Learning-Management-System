import React from 'react'
import '../App.css'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import BodyContent from '../Components/BodyContent/BodyContent'
import Card from '../Components/Card/Card'


function AllCoursesPage() {
  return (
    <>
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent>
          <div className="content">
            <h2>All Courses</h2>
          </div>
          <div className="container">
            <Card
              imgSrc='https://picsum.photos/300/'
              imgAlt='Placeholder Image'
              title='Course Title'
              description='Course Description'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc='https://picsum.photos/300/'
              imgAlt='Placeholder Image'
              title='Course Title'
              description='Course Description'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc='https://picsum.photos/300/'
              imgAlt='Placeholder Image'
              title='Course Title'
              description='Course Description'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc='https://picsum.photos/300/'
              imgAlt='Placeholder Image'
              title='Course Title'
              description='Course Description'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc='https://picsum.photos/300/'
              imgAlt='Placeholder Image'
              title='Course Title'
              description='Course Description'
              link='/'
              buttonText='View Course'
            />

            <Card
              imgSrc='https://picsum.photos/300/'
              imgAlt='Placeholder Image'
              title='Course Title'
              description='Course Description'
              link='/'
              buttonText='View Course'
            />
          </div>
          
        </BodyContent>
      </div>
    </>
  )
}

export default AllCoursesPage