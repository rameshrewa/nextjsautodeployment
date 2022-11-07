import parse from 'html-react-parser'; 

const Footer = ({Footer}) => {
  const { attributes } = Footer
  return (
  parse(attributes.Content)
  );
};

export default Footer;