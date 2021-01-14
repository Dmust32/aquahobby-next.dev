import Button from 'react-bulma-components/lib/components/button';

const affiliateButton = ({ affiliateLink, children }) => (
  <a href={affiliateLink}>
    {children}
  </a>
)


const CtaButton = ({ buttonColor, affiliateLink, onClick, children, size }) => {
  return (
    <Button
      color={buttonColor ? buttonColor : "primary"}
      renderAs={affiliateLink && affiliateButton}
      onClick={onClick && onClick}
      size={size}
    >
      {children}
    </Button>
  );
}

export default CtaButton
