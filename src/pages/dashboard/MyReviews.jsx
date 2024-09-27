import React, { useState, useEffect, useContext } from 'react';
import DashboardHeader from './DashboardHeader';
import { MdDelete, MdEdit } from 'react-icons/md';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import { Rate, Spin, Empty } from 'antd';

const ReviewCard = ({ review, onEdit, onDelete }) => (
  <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
    <div className='flex items-center mb-2'>
      <img
        className='rounded-full w-12 h-12 object-cover mr-4'
        src={review.user.image || 'https://via.placeholder.com/50'}
        alt='User avatar'
      />
      <div>
        <h2 className='text-lg font-semibold'>
          {review.property.propertyName}
        </h2>
        <p className='text-sm text-gray-500'>
          {new Date(review.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
    <Rate disabled defaultValue={review.rating} className='mb-2' />
    <p className='text-sm mb-3'>{review.message}</p>
    <div className='flex gap-2'>
      <button
        onClick={() => onDelete(review._id)}
        className='text-red-500 hover:text-red-700'
      >
        <MdDelete className='inline mr-1' /> Delete
      </button>
    </div>
  </div>
);

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  console.log(reviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/reviews?email=${user.email}`);
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchReviews();
    }
  }, [user]);

  const handleEdit = (review) => {
    // Implement edit functionality
    console.log('Edit review:', review);
  };

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`/reviews/${reviewId}`);
      setReviews(reviews.filter((review) => review._id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='p-10'>
        <DashboardHeader
          title='My Reviews'
          description='Manage your property reviews'
        />

        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <Spin size='large' />
          </div>
        ) : reviews.length > 0 ? (
          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            {reviews.map((review) => (
              <ReviewCard
                key={review._id}
                review={review}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <Empty
            description="You haven't written any reviews yet"
            className='mt-8'
          />
        )}
      </div>
    </div>
  );
};

export default MyReviews;
