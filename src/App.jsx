import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Import shared layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

// // Import page components
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Coaches from "./pages/Coaches";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
// // NOTE: You will create all the imported files in the next steps.

/**
 * Layout Component: This component wraps your page content.
 * It ensures that the Header and Footer are rendered on every page.
 * The <Outlet /> from react-router-dom is a placeholder that will be replaced
 * by the specific page component matching the current URL (e.g., <Home />, <Programs />, etc.).
 */
function Layout() {
  return (
    <div className="min-h-screen bg-afs-dark text-white overflow-x-hidden font-montserrat">
      <Header />
      <main>
        {/* The Outlet renders the active child route's element */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/**
 * Main App Component: This component now sets up the application's routing.
 * It uses BrowserRouter to enable routing and defines all the possible routes.
 * It no longer contains any direct visual content itself.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
          This is a "layout route". It specifies that any matching child routes 
          should be rendered inside the <Layout /> component's <Outlet />.
          This is the standard way to create persistent layouts (headers, footers, sidebars).
        */}
        <Route path="/" element={<Layout />}>
          {/* The "index" route renders the <Home /> component for the base path "/" */}
          <Route index element={<Home />} />

          {/* Define routes for the other pages */}
          <Route path="programs" element={<Programs />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />

          {/* You can add a "Not Found" page later with a catch-all route like this: */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;