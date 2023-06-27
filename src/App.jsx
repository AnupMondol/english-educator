
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import NavigationBar from './Components/Navbar/Navbar'
import AboutUs from './Components/About-us/AboutUs'
import Courses from './Components/Courses/Courses'
import Teachers from './Components/Teachers/Teachers'
import NotFound from './Components/Not-Found/NotFound'
import CourseDetail from './Components/Course-Detail/CourseDetail'
import Footer from './Components/Footer/Footer'




function App() {
  

  return (
    <>
      
       <NavigationBar></NavigationBar>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/course/:courseId' element={<CourseDetail/>}/>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>

      
      
    </>
  )
}

export default App
