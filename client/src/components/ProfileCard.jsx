function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.avatar_url} alt={profile.name} className="avatar" />
      <div className="profile-info">
        <h2>{profile.name || 'No name provided'}</h2>
        <p className="bio">{profile.bio || 'No bio available'}</p>
        <div className="profile-stats">
          <span>{profile.followers} followers</span>
          <span>{profile.following} following</span>
          <span>{profile.public_repos} repos</span>
        </div>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;