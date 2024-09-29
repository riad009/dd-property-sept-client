import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/cards/PropertyCard';
import { useUserContext } from '../providers/AuthProvider';
import MapCluster from './ClusterMap';
import { useSearchParams } from 'react-router-dom';

const PropertyForSale = () => {
  const { searchvalue, bedroomsSelected, pricefilter } = useUserContext();

  const [searchResults, setSearchResults] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState({});

  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');
  const maxPrice = searchParams.get('maxPrice');
  const minPrice = searchParams.get('minPrice');
  const bedrooms = searchParams.get('bedrooms');
  const propertyType = searchParams.get('propertyType');

  console.log({ searchResults });

  useEffect(() => {
    const fetchProperties = async () => {
      const apiUrl = `/get/search/property/new`;
      const requestData = {
        location,
        bedrooms,
        maxPrice,
        minPrice,
        propertyType,
      };

      try {
        setIsDataLoading(true);
        const { data } = await axios.post(apiUrl, requestData);
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchProperties();
  }, [searchvalue, bedroomsSelected, pricefilter]);

  useEffect(() => {
    const fetchCategoryProperties = async () => {
      try {
        const { data } = await axios.get(`/get/allProperties`);
        setAllProperties(data);
      } catch (error) {
        console.error('Error fetching category properties:', error);
      }
    };

    fetchCategoryProperties();
  }, []);

  const moreProperties = allProperties.filter(
    (property) => !searchResults.some((result) => result._id === property._id)
  );

  return (
    <div className='p-10 bg-dark2/5'>
      {isDataLoading ? (
        <div className='flex items-center justify-center h-24'>
          <div className='animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-12 w-12'></div>
        </div>
      ) : (
        <>
          <section className='flex'>
            <div className='flex-1 h-screen overflow-auto'>
              <div className='flex flex-col gap-5'>
                <h2 className='text-xl font-semibold mb-5'>
                  {searchResults?.length > 0
                    ? `Search Results (${searchResults.length})`
                    : 'No properties found for your search'}
                </h2>
                {searchResults.map((property) => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                    setSelectedProperty={setSelectedProperty}
                  />
                ))}
              </div>
              {moreProperties.length > 0 && (
                <div className='mt-10'>
                  <h3 className='text-xl font-semibold mb-5'>
                    More Properties
                  </h3>
                  <div className='flex flex-col gap-5'>
                    {moreProperties.map((property) => (
                      <PropertyCard
                        key={property._id}
                        property={property}
                        setSelectedProperty={setSelectedProperty}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='flex-1'>
              <MapCluster
                properties={allProperties}
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PropertyForSale;
