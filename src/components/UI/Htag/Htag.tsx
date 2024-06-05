import { HtagProps } from './Htag.props';

export default function Htag({ tag, children }: HtagProps) {
  switch (tag) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2 className="text-4xl mt-32 mb-12">{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4 className="text-2xl leading-9 ">{children}</h4>;
    default:
      return <></>;
  }
}
