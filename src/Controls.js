import React from 'react';

export const Controls = ({ setPage }) => {
  const nextPage = () => {
    setPage((prev) => {
      if (prev === 1) return prev;
      return prev + 1;
    });
  };

  const prevPage = () => {
    setPage((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };
  return (
    <>
      <button onClick={nextPage}>+1Page</button>
      <button onClick={prevPage}>-1Page</button>
    </>
  );
};
