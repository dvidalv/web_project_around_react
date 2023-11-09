import logo from '../images/logo.svg';
function Header() {
	return (
		<>
			<header className="header">
				<img className="logo" src={logo} alt="Logo around the US" />
			</header>
			<div className="error"></div>
		</>
	);
}

export default Header;
