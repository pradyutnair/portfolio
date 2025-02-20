"use client";

import dynamic from 'next/dynamic';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.default),
  { ssr: false }
);

const GitHubCommitHistory = ({ usernames }: { usernames: string[] }) => {
  return (
    <div className="space-y-8">
      {usernames.map((username) => (
        <div key={username} className="p-4 rounded-lg bg-black-900">
          <h3 className="text-lg font-bold mb-2">GitHub Contributions</h3>
          <GitHubCalendar 
            username={username}
            colorScheme="dark"
            fontSize={16}
          />
        </div>
      ))}
    </div>
  );
};

export default GitHubCommitHistory;
