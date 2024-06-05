import { ButtonProps } from './Button.props';
import classNames from 'classnames';
import cn from 'classnames';
import { BsWhatsapp } from 'react-icons/bs';

export default function Button({
  children,
  uppercase,
  color,
  whatsAppIcon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(className,'text-white text-center block',{
        'bg-primary-dark': color === 'primary-dark',
        'bg-primary': color === 'primary',
        'uppercase': uppercase === true,
      })}
      {...props}
    >
      {whatsAppIcon && (
        <span className="text-white">
          <BsWhatsapp className='w-full h-8 mb-2' />
          <p className="text-sm">WhatsApp</p>
        </span>
      )}
      {children}
    </button>
  );
}
