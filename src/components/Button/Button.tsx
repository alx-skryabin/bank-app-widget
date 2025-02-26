import React from 'react';
import './Button.scss';

interface ButtonProps {
  title: string;
  isPink?: boolean;
}

const Button = ({ title, isPink }: ButtonProps) => {
  const [count, setCount] = React.useState(0)

  return (
    <button className={`button ${isPink ? 'button-pink' : ''}`} onClick={() => {
      setCount(count + 1)
    }}>
      {title} - {count}
    </button>
  );
};

export default Button;
