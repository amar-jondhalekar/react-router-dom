
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div>
        <h2>What would you like to do?</h2>
        <ul>
          <li>
            <Link to="/">Go back to Homepage</Link>
          </li>
          <li>
            <Link to="/about">Learn more about us</Link>
          </li>
          <li>
            <Link to="/dashboard">Visit the dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;