import { useNavigate } from 'react-router-dom';

export default function Landing(): JSX.Element {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard/inbox');
  };

  return (
    <div>
      <div>Landing Page</div>

      <button onClick={goToDashboard}>Go to dashboard</button>
    </div>
  );
}
