import React from 'react';

type BoardPageProps = {
  params: {
    userId: string;
  };
};

const BoardPage = ({ params }: BoardPageProps) => {
  return (
    <div>
      <h1>User Mood Board: {params.userId}</h1>
    </div>
  );
};

export default BoardPage; 