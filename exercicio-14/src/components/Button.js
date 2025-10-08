
import './Button.css';

export default function Button ({ children, variant = 'primary', ...outrasProps }) {
  const classNames = `btn btn-${variant}`;

  return (
    <button className={classNames} {...outrasProps}>
      {children}
    </button>
  );
};
