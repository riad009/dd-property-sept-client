import { Button, Divider, Input, Modal } from 'antd';
import Brand from './Brand';
import { FcGoogle } from 'react-icons/fc';
import TextRed from './TextRed';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { useAuth } from "../providers/AuthProvider";

const LoginModal = ({ handleCancel, isModalOpen, setIsOpenRegiser }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { logInWithFacebook, userRefetch, setUserRefetch, logInWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    let res;
    try {
      res = await logInWithGoogle();
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }

    // console.log({ res });

    if (res._tokenResponse.email) {
      const payload = {
        name: res._tokenResponse.fullName,
        email: res._tokenResponse.email,
        image:
          res._tokenResponse.photoUrl || 'https://i.ibb.co/mcHGwPy/dummy.jpg',
        role: 'user',
      };

      try {
        const promise = await axios.post(`/google-login`, payload);

        if (promise.status === 200) {
          localStorage.setItem('accessToken', promise.data.token);
          setUserRefetch(!userRefetch);
          setError();
          setTimeout(() => {
            navigate('/dashboard');
            handleCancel();
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.response.data.message || `Log in failed`);
      }
    }
  };
  const handleFacebookSignIn = async () => {
    setLoading(true);
    let res;
    try {
      res = await logInWithFacebook();
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }

    // console.log({ res });

    if (res._tokenResponse.email) {
      const payload = {
        name: res._tokenResponse.fullName,
        email: res._tokenResponse.email,
        image:
          res._tokenResponse.photoUrl || 'https://i.ibb.co/mcHGwPy/dummy.jpg',
        role: 'user',
      };

      try {
        const promise = await axios.post(`/google-login`, payload);

        if (promise.status === 200) {
          localStorage.setItem('accessToken', promise.data.token);
          setUserRefetch(!userRefetch);
          setError();
          setTimeout(() => {
            navigate('/dashboard');
            handleCancel();
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.response.data.message || `Log in failed`);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());

    setLoading(true);
    try {
      const promise = await axios.post(`/login`, entries);
      if (promise.status === 200) {
        localStorage.setItem('accessToken', promise.data.token);
        setUserRefetch(!userRefetch);
        setError();
        setTimeout(() => {
          handleCancel();
          setLoading(false);
          navigate('/dashboard');
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.response.data.message || `Log in failed`);
    }
  };

  return (
    <Modal
      label='Auth Modal'
      onCancel={handleCancel}
      open={isModalOpen}
      footer={null}
    >
      <div className='text-center p-5'>
        <Brand center />
        <h1 className='my-4 font-semibold text-xl'>Welcome to DDproperty</h1>
        <p className='my-2 text-sm'>
          Log in or sign up to get the most out of your DDproperty experience.
        </p>

        <form onSubmit={handleSubmit} className='my-5 flex flex-col gap-2'>
          <Input name='email' required placeholder='Email address' />
          <Input
            name='password'
            required
            type='password'
            placeholder='Password'
          />

          <Button
            disabled={loading}
            htmlType='submit'
            type='submit'
            className='bg-danger text-white w-full hover:bg-danger/90'
          >
            {loading ? 'Logging in..' : 'Login'}
          </Button>

          {error && <p className='text-danger'>{error}</p>}
        </form>
        <div className='flex items-center justify-center my-5'>
          <hr className='border-1 bg-dark mx-3 w-full' />
          Or <hr className='border-1 bg-dark mx-3 w-full' />
        </div>

        <Button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className='w-full mb-2 flex items-center justify-center bg-white'
          icon={<FcGoogle className='text-xl text-' />}
        >
          Continue with Google
        </Button>
        <Button
          onClick={handleFacebookSignIn}
          disabled={loading}
          className='w-full mb-2 flex items-center justify-center bg-white'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='26'
              height='26'
              className='mr-1'
              viewBox='0 0 48 48'
            >
              <path
                fill='#039be5'
                d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'
              ></path>
              <path
                fill='#fff'
                d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
              ></path>
            </svg>
          }
        >
          Continue with Facebook
        </Button>

        <div className='my-5'>
          <p>Dont't have an account?</p>
          <TextRed
            extraClasses='hover:text-danger/80'
            onClick={() => {
              setIsOpenRegiser(true);
              handleCancel();
            }}
          >
            Register
          </TextRed>
        </div>

        <Divider />

        <p className='text-xs'>
          I agree to DDproperty&apos;s Terms of Service and Privacy Policy
          including the collection, use and disclosure of my personal
          information.
        </p>
      </div>
    </Modal>
  );
};

export default LoginModal;
