// import React from 'react';
import SmallContainer from '../../shared/SmallContainer';
import { useLoaderData, useParams } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import BodyNav from './BodyNav';
import OverviewSection from './OverviewSection';
import Banner from './Banner';
import ReviewSection from './ReviewSection';

import 'react-slideshow-image/dist/styles.css';

import ContactOwner from './ContactOwner';
import SimilarListings from './SimilarListings';
import FAQ from './FAQ';

import MoreDetails from './MoreDetails';
import VideoSection from './VideoSection';
import MapLocation from '../../components/Steps/MapLocation';
import Amenities from './Amenities';

const SingleProperty = () => {
  const { projectName } = useParams();

  const breadCrumbItems = [
    {
      href: '/',
      title: <HomeOutlined />,
    },
    {
      title: 'Property',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/',
    },
    {
      title: projectName,
    },
  ];

  const handleContactAbout = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  //get by propterty
  const property = useLoaderData();

  return (
    <div>
      <div
        style={{
          marginLeft: '15px',
          marginRight: '15px',
        }}
      >
        <Banner
          p={property}
          breadCrumbItems={breadCrumbItems}
          images={property?.imageUrls}
          coverImage={property?.coverImage}
        />
      </div>
      {/* Body Navbar */}
      <div className='sm:sticky top-0 z-50 sm:max-h-[calc(60vh-40px)]'>
        <BodyNav />
      </div>
      <SmallContainer extraClasses='relative p-10'>
        <div className='sm:flex gap-5'>
          <div className='flex-1'>
            <OverviewSection property={property} />
            <MoreDetails property={property}></MoreDetails>
            {console.log(property?.amenities)}
            {property?.amenities && <Amenities property={property} />}

            {property?.video && <VideoSection property={property} />}
          </div>
          <div>
            {/* {property?.isVerified &&  */}
            <ContactOwner property={property} />
            {/* } */}
          </div>
        </div>

        <MapLocation location={property.latLng} setMap={() => {}} />

        <ReviewSection
          handleContactAbout={handleContactAbout}
          property={property}
        />
      </SmallContainer>
      <SimilarListings />
      <SmallContainer>
        <FAQ />
      </SmallContainer>
    </div>
  );
};

export default SingleProperty;
