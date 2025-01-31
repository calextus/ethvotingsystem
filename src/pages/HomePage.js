import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const handleCreatePanelClick = () => {
    router.push('/register-candidate'); // Redirects to the Register Candidate page
  };

  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to LetVote, its safe and Secure</h1>
      </header>
      <button className="create-panel-button" onClick={handleCreatePanelClick}>
        Create Panel
      </button>
      <div className="image-gallery">
        <img src="/images/voting1.jpg" alt="People Voting" />
        <img src="/images/voting2.jpg" alt="Voting is Power" />
        <img src="/images/voting3.jpg" alt="Count Every Vote" />
      </div>
    </div>
  );
}
