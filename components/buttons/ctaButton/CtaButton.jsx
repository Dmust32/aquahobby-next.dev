import Button from 'react-bulma-components/lib/components/button';


const CtaButton = ({ buttonColor, affiliateLink, onClick, children, size }) => {
  return (
    <Button
      color={buttonColor ? buttonColor : "primary"}
      onClick={onClick && onClick}
      size={size}
    >
      <a href={affiliateLink}>
        {children}
      </a>
    </Button>
  );
}

export default CtaButton
