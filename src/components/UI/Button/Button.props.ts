export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
children?: React.ReactNode;
color: 'primary' | 'primary-dark',
className?: string,
uppercase?: boolean,
whatsAppIcon?: boolean,
}