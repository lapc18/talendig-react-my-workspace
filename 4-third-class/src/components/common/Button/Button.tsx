import { FC } from "react";


export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({ label, onClick, disabled, style = {}, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={{
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        transition: 'background-color 0.3s ease',
        backgroundColor: disabled ? 'var(--color-secondary)' : 'var(--color-primary)',
        ...style,
    }}>
      {label}
    </button>
  );
};

export default Button;