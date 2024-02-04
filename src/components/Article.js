// Article.js
import React from 'react';

export default function Article({ title, date = 'January 1, 1970', preview }) {
  const minutesToRead = Math.ceil(preview.split(' ').length / 200); // Assuming 200 words per minute

  const renderEmoji = (emoji, count) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} role="img" aria-label="coffee cup">
        {emoji}
      </span>
    ));
  };

  const renderMinutesToRead = (minutes) => {
    const coffeeCupEmoji = '☕️';
    const bentoBoxEmoji = '🍱';

    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return (
        <span>
          {renderEmoji(coffeeCupEmoji, coffeeCups)} {minutes} min read
        </span>
      );
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return (
        <span>
          {renderEmoji(bentoBoxEmoji, bentoBoxes)} {minutes} min read
        </span>
      );
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead(minutesToRead)}</p>
    </article>
  );
}
