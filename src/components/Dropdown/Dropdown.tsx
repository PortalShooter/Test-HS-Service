import React, {FC, useEffect, useRef, useState} from "react"

//Styles
import styles from './dropdown.module.scss';
import classnames from 'classnames/bind';
import Button from "../Button";
const cn = classnames.bind(styles);

interface DropdownProps {
  text: string;
  listItem: number[];
}

const Dropdown: FC<DropdownProps>= ({
  text,
  listItem
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if(ref && ref.current !== e.target) {
        setIsOpen(false)
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const handleToggle = () => setIsOpen(prevState => !prevState)
  function handleItem(item: any) {
    console.log(item)
  }

  return (
    <div className={cn('dropdown')}>
      <Button
        refProp={ref}
        onClick={handleToggle} 
      >
        {text}
      </Button>

      <div className={cn('dropdown__list')}>
        {isOpen && listItem.map((item, index) => 
          <div 
            className={cn('dropdown__item')}
            key={index}
            onClick={() => handleItem(item)}
          >
            {item}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown