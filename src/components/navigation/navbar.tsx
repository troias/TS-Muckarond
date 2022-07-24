const NavBar = () => {
    return (
        <nav className="navbar__wraper">
            <ul className="navbar">
                <li >
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">ToDo List</a>
                </li>
                <li>
                    <a href="/ts">TsPractice</a>
                </li>
                <li>
                    <a href="/tspractice2">TsPractice2</a>
                </li>
                <li>
                    <a href="/chicken-form">Chicken Form</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar