import { Link } from 'react-router-dom';
import banner from '../assets/greyBanner.svg';
import SmallContainer from '../shared/SmallContainer';
import Share from '../components/Share';
import Verified from '../components/Verified';
import { MdQuestionMark, MdVerified } from 'react-icons/md';
import Heading from '../components/Heading';

const AgentProfile = () => {
  const agentInfo = {
    id: 1,
    name: 'Krittawan Talomkham',
    title: 'Freelance Real Estate Agent',
    image: 'https://th1-cdn.pgimgs.com/agent/15414137/APHO.116034286.V300.jpg',
    status: 'verified',
    company_logo:
      'https://th2-cdn.pgimgs.com/agency/30/CLOGO.68060144.V120.jpg',
    phone: '+66 89 937 5511',
  };

  return (
    <div>
      <img
        className='w-full h-80 object-cover'
        src={banner}
        alt='grey_banner'
      />
      <SmallContainer extraClasses='p-10'>
        <section className='-mt-28 flex items-center'>
          <div className='relative'>
            <img
              className='h-40 border-4 border-white object-cover w-40 rounded-full'
              src={agentInfo.image}
              alt=''
            />
            <div className='absolute bottom-0 left-1/2 trasnform -translate-x-1/2'>
              <Verified />
            </div>
          </div>
          <div className='flex-1'>
            <h1 className='font-semibold text-3xl mb-5'>{agentInfo.name}</h1>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <img
                  className='w-16'
                  src={agentInfo.company_logo}
                  alt='company_logo'
                />
                {/* <h1 className='text-2xl'>{agentInfo.title}</h1> */}
              </div>
              <div className='flex items-center gap-2'>
                <Share />
                <Link
                  className='rounded py-1 px-4 bg-danger text-white'
                  to='#contactSection'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-dark2/5 grid grid-cols-4 items-center gap-5 p-10 my-10'>
          <div className=''>
            <h1>Less than a year</h1>
            <h1>Years with Thaiproperty4u</h1>
          </div>
          <div className=''>
            <h1 className='text-3xl font-semibold'>70</h1>
            <h1>Listing for sale</h1>
          </div>
          <div className=''>
            <h1 className='text-3xl font-semibold'>6</h1>
            <h1>Listing for rent</h1>
          </div>
          <div className=''>
            <h1 className='flex items-center gap-2'>
              <MdVerified /> Certified{' '}
              <MdQuestionMark className='bg-dark text-white rounded-full p-1 text-lg' />
            </h1>
            <h1>Issued on June 2023</h1>
          </div>
        </section>
        <section className='flex gap-10'>
          <div>
            <Heading>Where Chartchai Operates</Heading>
            <p className='text-xs text-dark2'>Show only properties</p>
            <div className='text-xs flex gap-5 my-3'>
              <h1 className='bg-dark2/10 py-1 px-4 rounded-full'>
                47 for sale
              </h1>
              <h1 className='bg-dark2/10 py-1 px-4 rounded-full'>
                47 for sale
              </h1>
            </div>
            <div>
              <h1 className='font-bold'>Bankok</h1>
              <p className='text-xs'>19 For Sale, 2 For Rent</p>
              <h1 className='font-bold mt-5'>Chorake Bua</h1>
              <p className='text-xs'>1 For Sale</p>
              <h1 className='font-bold mt-5'>Lat Phrao</h1>
              <p className='text-xs'>1 For Sale</p>
            </div>
          </div>
          {/* TODO: MAP IMPLEMENTATION */}
          <div className='text-9xl border flex-1'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643498.6688220683!2d103.95957680162029!3d26.900188946830937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36bf67eaae6dd399%3A0xec9c1d7600abd55e!2sGuizhou%2C%20China!5e0!3m2!1sen!2sbd!4v1691653396893!5m2!1sen!2sbd'
              width='600'
              height='350'
              allowfullscreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </section>
      </SmallContainer>
    </div>
  );
};

export default AgentProfile;
