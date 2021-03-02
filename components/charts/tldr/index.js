import TldrMobile from './TldrMobile';
import TldrDesktop from './TldrDesktop';

const getTldr = (isMobile, props) => {
  if (isMobile) {
    return (
      <TldrMobile {...props} />
    )
  } else {
    return (
      <TldrDesktop {...props} />
    )
  }
}

export default getTldr;