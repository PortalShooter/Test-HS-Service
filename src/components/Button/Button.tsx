import React, {FC} from "react"

//Styles
import styles from './button.module.scss';
import classnames from 'classnames/bind';
const cn = classnames.bind(styles);

type typeBtn = 'danger' | 'success' | 'warning' | 'primary'

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  type?: typeBtn;
  large?: boolean;
  min?: boolean;
  block?: boolean;
  outlined?: boolean;
  text?: boolean;
}

const Button: FC<ButtonProps> = (
  {
    children,
    loading = false,
    onClick,
    disabled = false,
    type = 'primary',
    large = false,
    min = false,
    block = false,
    outlined = false,
    text = false,
  }) => {
  return (
    <button 
      onClick={onClick} 
      className={cn(
        'button',
        `button__${type}`,
        loading && 'button_loading',
        disabled && 'button_disabled',
        min && 'button__min',
        large && 'button__large',
        block && 'button__block',
        outlined && 'button__outlined',
        text && 'button__text',
      )}>
      {!loading && children}
    </button>
  )
}

export default Button