import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <nav className="nav">
          <h1>Delight Students Hostel</h1>
          <div className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/rooms">Rooms</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact" className="nav-cta">
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <h4>Delight Students Hostel</h4>
            <p>
              Comfortable, clean, and secure student accommodation in Kikoni near
              Makerere University.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/rooms">Rooms</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="tel:0741081048">0741081048</a>
              <a href="mailto:dorahnami592@gmail.com">dorahnami592@gmail.com</a>
              <p>Kikoni, Kampala, Uganda</p>
            </div>
          </div>
        </div>
        <p className="footer-bottom">
          {new Date().getFullYear()} Delight Students Hostel. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
