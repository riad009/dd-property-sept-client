import { Button, message, Rate, Input } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Content = ({ propertyId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
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
    if (!rating || !review || !email) {
      message.error('Please fill in all fields');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      message.error('Please enter a valid email address');
      return;
    }

    try {
      const response = await axios.post(`/reviews`, {
        rating,
        message: review,
        propertyId,
        email,
      });
      console.log({ response });
      if (response.status === 200) {
        message.success('Review submitted successfully');
        setRating(0);
        setReview('');
        setEmail('');
        // Refresh reviews
        const updatedReviews = await axios.get(`/reviews/${propertyId}`);
        setReviews(updatedReviews.data);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  console.log({ reviews });

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
      <div className='mb-4'>
        <p className='text-sm font-medium mb-2'>Your Email:</p>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
      </div>
      <Button
        onClick={handleSubmitReview}
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md'
      >
        Submit Review
      </Button>

      <div className='mt-6'>
        <h3 className='text-xl font-semibold mb-3'>Recent Reviews</h3>
        {reviews.length > 0 ? (
          reviews.slice(0, 5).map((review, index) => (
            <div key={index} className='mb-4 border-b pb-2'>
              <Rate disabled defaultValue={review.rating} />
              <p className='text-sm mt-1'>{review.message}</p>
              <p className='text-xs text-gray-500 mt-1'>
                By {review.email} on{' '}
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

const ReviewSection = ({ property }) => {
  return (
    <div className='mt-10'>
      <div className='rounded-md'>
        <Content propertyId={property?._id} />
      </div>
    </div>
  );
};

export default ReviewSection;
