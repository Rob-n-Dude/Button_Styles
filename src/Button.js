import React, { useCallback, useEffect, useState } from 'react';

export const Button = ({ content, isSelected = false }) => {
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(false);
  }, [content]);

  const onClickHandler = useCallback(() => {
    setSelected((prev) => !prev);
  }, []);

  const toggleStyles = useCallback(() => {
    return {
      backgroundColor: selected ? 'red' : '',
    };
  }, [selected]);

  return (
    <button onClick={onClickHandler} style={toggleStyles()}>
      {content}
    </button>
  );
};
