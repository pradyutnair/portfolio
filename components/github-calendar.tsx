"use client";

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.default),
  { ssr: false }
);

const GitHubCommitHistory = ({ usernames }: { usernames: string[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className="space-y-8 min-h-[160px]">
      {usernames.map((username) => (
        <div key={username}>
          {visible && (
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              fontSize={14}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default GitHubCommitHistory;
