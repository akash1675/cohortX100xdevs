import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom"

export default function Routers() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/neet" element={<Layout />}>
              {/* <Route path="/" element={<Landing />}></Route> */}
              <Route path="*" element={<ErrorPage />}></Route>
              <Route path="/neet/class-11" element={<Class11 />}></Route>
              <Route path="/neet/class-12" element={<Class12 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function Layout() {
  return (
    <>

      <div style={{ backgroundColor: "black",height:"100vh" }}>
        <Header />
        <div style={{height:"90vh", color:"white", backgroundColor:"red"}}>
          <Outlet />
          
        </div>
        <div style={{color:"white"}}> 
           <Footer />
        </div>
       
      </div>
    </>
  )
}

function Header() {
  return (
    <>
      <Link to={"/neet/class-11"}>class11</Link>
      <Link to={"/neet/class-12"}> class-12</Link>
    </>
  )

}

function Footer() {
  return (
    <div>
      Footer||About
    </div>
  )
}


// function Landing() {
//   return (
//     <>
//       <div>
//         welcom this is Landing Page
//       </div>
//     </>
//   )
// }

function ErrorPage() {
  return (
    <>
      <div>
        Sorry! Page Note Found
      </div>
    </>
  )
}

function Class11() {
  return (
    <div>
      hello this class11
    </div>
  )
}

function Class12() {
  return (
    <div>
      hello this class12
    </div>
  )
}

