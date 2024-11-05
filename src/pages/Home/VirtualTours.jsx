import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader';
import CardOne from '../../components/cards/CardOne';
import SmallContainer from '../../shared/SmallContainer';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../providers/AuthProvider';

const VirtualTours = () => {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}/get/videos`);
        const data = await response.json();
        setProperties(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Fetch data only on the initial render
    if (loading) {
      fetchData();
    }
  }, [loading]); // Dependency array includes 'loading' to ensure the effect runs when 'loading' changes

  return (
    <div>
      <SmallContainer extraClasses='px-10 sm:py-16 py-10'>
        <SectionHeader newItem title='Videos & Virtual Tours' />
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
          {properties?.map((property, index) => (
            <CardOne
              clickEvent={() =>
                navigate(
                  `/property/${property._id}?propertyName=${property.propertyName}`
                )
              }
              property={property}
              key={index}
              // image={project.image}
              // type={project.type}
              // title={project.title}
              // text={project.text}
            />
          ))}
        </div>
        <Button extraClasses='sm:hidden bg-dark text-white mx-auto mt-10'>
          View More
        </Button>
      </SmallContainer>
    </div>
  );
};

export default VirtualTours;
