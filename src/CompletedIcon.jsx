import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompletedIcon() {
  return (
    <TodoIcon 
        type="check"
        color="gray"
        />
  );
}

export { CompletedIcon };