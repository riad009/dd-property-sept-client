import { Button, Divider, Input, Modal, Select, Upload } from 'antd';
import Brand from './Brand';

import TextRed from './TextRed';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import { keys } from 'localforage';
const { Option } = Select;

const Register = ({ handleCancel, isModalOpen, setIsModalOpen }) => {
  const [error, setError] = useState('');
  const { userRefetch, setUserRefetch } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('user');

  const [fileList, setFileList] = useState([]);
  const [images, setImage] = useState([]);
  const [company_logo, setCompanyLogo] = useState([]);
  const [mediaFileError, setMediaFileError] = useState(false);

  // const handleChange = ({ fileList }) => {
  //   console.log(fileList);
  //   // setFileList(fileList);

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMediaFileError(false);
    setError('');

    const formData = new FormData(e.target);

    formData.append('role', selectedRole);

    formData.append(
      'image',
      images.length > 0 ? images[0]?.originFileObj : null
    );
    formData.append(
      'company_logo',
      company_logo.length > 0 ? company_logo[0]?.originFileObj : null
    );

    if (selectedRole !== 'user') {
      if (!images[0]?.originFileObj || !company_logo[0]?.originFileObj) {
        setMediaFileError(true);
        return; // Stop further execution if media files are missing
      }
    }

    // Iterate through all entries:

    setLoading(true);
    try {
      const promise = await axios.post(`/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
      console.log(error);
      setError(error.response.data.message || `Log in failed`);
      setLoading(false);
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
        <h1 className='my-4 font-semibold text-xl'>
          Welcome to Thaiproperty4u
        </h1>
        <p className='my-2 text-sm'>
          Register up to get the most out of your Thaiproperty4u experience.
        </p>

        <form onSubmit={handleSubmit} className='my-5 flex flex-col gap-2'>
          <Select
            defaultValue={selectedRole}
            onChange={(e) => setSelectedRole(e)}
            name='role'
            required
          >
            <Option value='user'>Owner</Option>
            <Option value='agent'>Agent</Option>
            <Option value='constructor'>Construction Company</Option>
          </Select>
          <Input
            name='name'
            required
            placeholder={
              selectedRole === 'user' || selectedRole === 'agent'
                ? 'Name'
                : 'Seller Name'
            }
          />

          {selectedRole === 'agent' && (
            <div className='flex flex-col gap-2'>
              <Input name='title' required placeholder='Title' />
              <Input name='phoneNumber' required placeholder='Phone Number' />
            </div>
          )}

          {selectedRole === 'constructor' && (
            <div className='flex flex-col gap-2'>
              <Input name='title' required placeholder='Company Title' />

              <Input
                name='description'
                required
                placeholder='Company Description'
                type='textarea'
                size='large'
                spellCheck
                maxLength={1000}
                showCount
              />

              <Input
                name='type'
                required
                placeholder='Company Type (ie. buisness, real estate)'
              />
            </div>
          )}

          <Input name='email' required placeholder='Email address' />
          <Input
            name='password'
            required
            type='password'
            placeholder='Password'
          />
          {(selectedRole === 'agent' || selectedRole === 'constructor') && (
            <div className='flex flex-col gap-2 md:flex-row'>
              <Upload
                listType='picture-card'
                maxCount={1}
                beforeUpload={() => false}
                fileList={images}
                onChange={(file) => setImage(file.fileList)}
              >
                {images.length >= 1 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>
                      {selectedRole === 'agent'
                        ? 'Upload Profile Image'
                        : 'Upload Seller Image'}
                    </div>
                  </div>
                )}
              </Upload>
              <Upload
                listType='picture-card'
                maxCount={1}
                beforeUpload={() => false}
                fileList={company_logo}
                onChange={(file) => setCompanyLogo(file.fileList)}
              >
                {company_logo.length >= 1 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload Company Logo</div>
                  </div>
                )}
              </Upload>
            </div>
          )}
          {mediaFileError && (
            <p className='text-red-600 text-xs'>Please Upload Image(s)</p>
          )}
          <Button
            disabled={loading}
            htmlType='submit'
            type='submit'
            className='bg-danger text-white w-full hover:bg-danger/90'
          >
            {loading ? 'Registering..' : 'Register'}
          </Button>

          {error && <p className='text-danger'>{error}</p>}
        </form>

        <div className='my-5'>
          <p>Already have an account?</p>
          <TextRed
            onClick={() => {
              setIsModalOpen(true);
              handleCancel();
            }}
            extraClasses='hover:text-danger/80'
          >
            Login
          </TextRed>
        </div>

        <Divider />

        <p className='text-xs'>
          I agree to Thaiproperty4u&apos;s Terms of Service and Privacy Policy
          including the collection, use and disclosure of my personal
          information.
        </p>
      </div>
    </Modal>
  );
};

export default Register;
