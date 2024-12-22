function Header() {
    const headerSytle={
        backgroundColor:"red",
        color:"white",
        padding:"10px",
        textAlign:"center",
    };
    const titleStyle={
        fontSizen:"50px",
        margin:"0",
    };
    const navaStyle={
        display:"flex",
        listStyle:"none",
        padding:"0",
        margin:"0",
        justifyContent:"center",
        aligenItems:"center",
        gap:   "20px",
     };
    return (
        <nav>
            <header style={headerSytle}>
                <h1 style={titleStyle}>PT.Suriya Laksana Sejahtra</h1>
                <p>Perusahaan bergerak di bidang Tambang</p>
            </header>
            <ul style={navaStyle}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Header;