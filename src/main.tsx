import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./routes/App";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="text-gray-600 mt-2">
      Oops! The page you're looking for doesn't exist.
    </p>
    <a
      href="/portfolio"
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Go Back Home
    </a>
  </div>
);

// Set the basename to your repo name for GitHub Pages
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "skills", element: <Skills /> },
        { path: "projects", element: <Projects /> },
        { path: "certifications", element: <Certifications /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  { basename: "/portfolio" } // <-- Add this line
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



