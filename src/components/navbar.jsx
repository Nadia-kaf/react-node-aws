import { Link, Router } from "react-router-dom";
import NProgress from "nprogress";


NProgress.start();
NProgress.configure({ easing: 'ease', speed: 5000 });

Router.onRouteChangeComplete = url => NProgress.done();


export default function NavBar() {
  return (
    <>
      <ul className="nav nav-tabs bg-warning pt-2 pb-2">
      <li className="nav-item ">
        <Link to="/" className="nav-link text-dark">
          {" "}
         Home
        </Link></li>
        <li className="nav-item ">
        <Link to="/login" className="nav-link text-dark">
          {" "}
         Login
        </Link></li>
        <li className="nav-item ">
        <Link to="/register" className="nav-link text-dark">
          {" "}
         Register
        </Link>
        </li>
      </ul>
    </>
  );
}
