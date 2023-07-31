import ComponentsCard from './ComponentsCard';

const HomeBanner = ({ components }) => {

  return (
    <section className="my-8">
        home banner
      {components &&
        components.map((component) => {
          return <ComponentsCard components={component} key={component._id} />;
        })}
    </section>
  );
};

export default HomeBanner;

export const getStaticProps = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const components = await res.json();
      return { props: { components } };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { props: { components: [] } }; 
    }
  };