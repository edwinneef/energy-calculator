
export interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <header className="c-header">
      <div className="container">
        <h1>Weave<span>Energy</span></h1>
      </div>
    </header>
  )
}

export default Header;