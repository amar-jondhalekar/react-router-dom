
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Params = () => {
  const { id } = useParams();

  // Validation: Check if id is valid 
  const isValidId = !isNaN(parseInt(id));

  if (!id || !isValidId) {
    // Fallback message for invalid or missing id
    return (
      <div>
        <h1>Invalid or Missing Student ID</h1>
        <p>Please check the URL and try again.</p>
        <Link to="/">Go back to Homepage</Link>
      </div>
    );
  }

  // Render student details for valid id
  return (
    <div>
      <h1>Student ID: {id}</h1>
      {/* Render student details here */}
    </div>
  );
};

export default Params;