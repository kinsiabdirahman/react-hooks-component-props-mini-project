
import React from 'react';

export default function Header({ name }) {
  return (
    <header data-testid="header">
      <h1>{name}</h1>
    </header>
  );
}
