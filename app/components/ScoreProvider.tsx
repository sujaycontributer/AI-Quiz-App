'use client';

import { createContext, useContext, useState, ReactNode } from 'react';


type scoreContext =  {
    score : number;
    setScore : (score:number) => void;
    qnSolved: number;
    setQnSolved: (score:number) => void;

}

//@ts-ignore
const scoreContext = createContext<scoreContext>(0);

export const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [qnSolved, setQnSolved] = useState(0);

  return (
    <scoreContext.Provider value={{ score, setScore, qnSolved, setQnSolved }}>
      {children}
    </scoreContext.Provider>
  );
};


export const useScore = () => {
  const context = useContext(scoreContext);
  // if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};