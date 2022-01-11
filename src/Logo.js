import logo from './pngs/logo.png';

function Logo() {
    return (
        <div className="logo">
            <img src={logo} style={{height: "clamp(3rem, 20vw, 4rem)"}} />
        </div>
    )
}

export default Logo;