import logo from '../images/logo.svg';
function Header() {
	return (
		<>
			<header class="header">
				<img class="logo" src={logo} alt="Logo around the US" />
			</header>
			<div class="error"></div>
		</>
	);
}

export default Header;
