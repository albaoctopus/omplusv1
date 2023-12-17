"use client"

// navigation-itemhello.tsx

import { useState } from 'react';
import HelloComponent from '../hello';

export const NavigationItemHello = () => {
  const [showHello, setShowHello] = useState(false);

  return (
    <>
      <button onClick={() => setShowHello(true)}>
        Show Hello  
      </button>
      {showHello && <HelloComponent/>}
    </>
  )
}