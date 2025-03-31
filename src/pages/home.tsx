import Header from '../components/header';
import Features from '../components/features';
import Pricing from '../components/pricing';
import Testimonials from '../components/testimonials';
import ContactForm from '../components/contactform';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <Features />
      <Pricing />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;