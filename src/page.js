import React, { useCallback } from 'react';
import { Button } from './Button';
import { buttonContent } from './buttonContent';

export const Page = ({ pageNum }) => {
  const renderButtons = useCallback(() => {
    return buttonContent[pageNum].map((button, index) => {
      return <Button key={index} content={button.content} />;
    });
  }, [pageNum]);

  return renderButtons();
};
