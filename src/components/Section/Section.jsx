import PropTypes from 'prop-types';
// import { SectionWrapper, SectionTitle } from './Section.styled';
import { Heading, Container } from '@chakra-ui/react';

const Section = ({ title, children }) => (
  <section>
    <Container centerContent my={4}>
      {title && <Heading mb={4} as="h2">{title}</Heading>}
      {children}
    </Container>
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
