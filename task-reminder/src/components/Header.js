import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Reminder'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

/* Inline JS Styling

const headingStyles = {
  color: 'red',
  backgroundColor: 'black'
} */

export default Header

/* If you're going to use Class Function

class Header extends React.Component {
  render() {
    return <h1>Task Reminder</h1>
  }
} */
