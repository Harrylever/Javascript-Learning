import "./header.css"

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="App logo" className="logo__img" />

      <div>
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">team</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">survey</a>
            </li>
          </ul>
        </nav>

        <div>
          {/* img */}
          {/* button */}
        </div>
      </div>
    </header>
  )
}

export default Header
