// Built-in typing system
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
		</header>
	);
};

// Default props
Header.defaultProps = {
	title: 'Task Tracker',
};

// Typing
Header.prototype = {
	title: PropTypes.string,
};

// Styling components with css
/*
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
*/

export default Header;
