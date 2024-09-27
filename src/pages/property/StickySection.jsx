import { Button, message, Rate } from 'antd';
import { CiHeart, CiShare2 } from 'react-icons/ci';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

export const Content = ({ propertyId, user }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/reviews/${propertyId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [propertyId]);

  const handleSubmitReview = async () => {
    if (!rating || !review) {
      message.error('Please rate the property');
      return;
    }

    if (!user) {
      message.error('Please login to submit a review');
      return;
    }

    try {
      const response = await axios.post(`/reviews`, {
        rating,
        message: review,
        propertyId,
        email: user.email,
      });
      if (response.status === 201) {
        message.success('Review submitted successfully');
        setRating(0);
        setReview('');
        // Refresh reviews
        const updatedReviews = await axios.get(`/reviews/${propertyId}`);
        setReviews(updatedReviews.data);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  console.log(user);

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-semibold text-center mb-4'>
        Reviews & Ratings
      </h2>
      <div className='mb-4'>
        <p className='text-sm font-medium mb-2'>Your Rating:</p>
        <Rate value={rating} onChange={setRating} />
      </div>
      <div className='mb-4'>
        <p className='text-sm font-medium mb-2'>Your Review:</p>
        <textarea
          className='w-full p-2 border rounded'
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
        />
      </div>
      {user?.email ? (
        <Button
          onClick={handleSubmitReview}
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md'
        >
          Submit Review
        </Button>
      ) : (
        <p className='text-center mb-4'>Please login to submit a review</p>
      )}

      <div className='mt-6'>
        <h3 className='text-xl font-semibold mb-3'>Recent Reviews</h3>
        {reviews.length > 0 ? (
          reviews.slice(0, 5).map((review, index) => (
            <div key={index} className='mb-4 border-b pb-2'>
              <Rate disabled defaultValue={review.rating} />
              <p className='text-sm mt-1'>{review.message}</p>
              <p className='text-xs text-gray-500 mt-1'>
                By {review.user.name} on{' '}
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};
const StickySection = ({ handleContactAbout, property }) => {
  const { user } = useContext(AuthContext);

  const handleFavoriteClick = async () => {
    try {
      // Update user's favorites on the backend
      const response = await axios.put(`/user/favorites/${user?.email}`, {
        propertyId: property?._id,
      });
      console.log({ response });
      if (response?.status === 200) {
        alert('Property added to favourites');
      }
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };
  return (
    <div className='w-72 sm:sticky top-16'>
      <div className='bg-dark/5 p-3 rounded-md'>
        <Content
          handleContactAbout={handleContactAbout}
          propertyId={property?._id}
          user={user}
        />
      </div>
      <div className='flex items-center justify-center gap-3 text-danger mt-3 text-sm'>
        {user?.email && (
          <div
            className='cursor-pointer flex items-center gap-2'
            onClick={handleFavoriteClick}
          >
            <CiHeart className='text-lg' />
            Favourite
          </div>
        )}
        <div className='cursor-pointer flex items-center gap-2'>
          <CiShare2 />
          Share
        </div>
      </div>
    </div>
  );
};

export default StickySection;
