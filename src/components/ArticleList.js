
import React from 'react';
import Article from './Article';

export default function ArticleList({ posts }) {
  return (
    <main data-testid="article-list">
      {posts.map((post, index) => (
        <Article key={index} {...post} />
      ))}
    </main>
  );
}
