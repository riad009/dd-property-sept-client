import React, { useEffect, useState } from 'react';
import DashboardHeader from './DashboardHeader';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  Upload,
  Steps,
  Radio,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';

import AutocompleteInput from '../../components/Steps/AutoCompleate';
import { defaultProperType } from '../../constants/footerItem';
import MapLocation from '../../components/Steps/MapLocation';

const { Option } = Select;

const amenitiesData = [
  {
    label: 'Air Conditioning',
    value: 'Air Conditioning',
  },
  {
    label: 'Balcony',
    value: 'Balcony',
  },
  {
    label: 'Dining Room Furniture',
    value: 'Dining Room Furniture',
  },
  {
    label: 'Fridge',
    value: 'Fridge',
  },
  {
    label: 'Penthouse',
    value: 'Penthouse',
  },
  {
    label: 'Renovated',
    value: 'Renovated',
  },
  {
    label: 'Television',
    value: 'Television',
  },
];

const UpdateProperty = () => {
  const [form] = Form.useForm();
  const [propertyData, setPropertyData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isModified, setIsModified] = useState(false);
  const [savedFormValues, setSavedFormValues] = useState({});
  const [listingType, setListingType] = useState(null);
  const [map, setMap] = useState(null);
  const [staticPropertyType, setStaticPropertyType] = useState();
  const [selectedLocation, setSelectedLocation] = useState({});
  const { id } = useParams();
  const [draggedData, setDraggedData] = useState({});
  const fetchPropertyData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/property/${id}`);
      setPropertyData(response.data);
      setSelectedLocation(response.data.latLng);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching property data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, [id]);

  useEffect(() => {
    if (Object.keys(propertyData).length) {
      form.setFieldsValue(propertyData);
    }
    setStaticPropertyType(propertyData.propertyType);
  }, [propertyData, form, setStaticPropertyType]);
  const handlePlaceChanged = (name, place, newLocation) => {
    console.log(`Updating form field ${name} with value`, place.name);
    form.setFieldsValue({ [name]: place.name });
    setSelectedLocation(newLocation);
    if (map) {
      map.panTo(newLocation);
    }
  };

  const handleNextStep = () => {
    setSavedFormValues((prevValues) => ({
      ...prevValues,
      ...form.getFieldsValue(),
    }));
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setSavedFormValues((prevValues) => ({
      ...prevValues,
      ...form.getFieldsValue(),
    }));
    setCurrentStep(currentStep - 1);
  };
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleUpdateButton = async () => {
    const values = { ...savedFormValues, ...form.getFieldsValue() };
    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (
          values[key] !== undefined &&
          (!Array.isArray(values[key]) || values[key].length > 0)
        ) {
          formData.append(key, values[key]);
        }
      }
    }
    const latLng = {
      lat: selectedLocation.lat,
      lng: selectedLocation.lng,
    };

    const jsonLatLng = JSON.stringify(latLng);

    formData.append('latLng', jsonLatLng);

    if (fileList.length) {
      formData.append('coverImage', fileList[0].originFileObj);
      fileList.slice(1).forEach((file) => {
        formData.append('imageUrls', file.originFileObj);
      });
    }
    // console.log({latLng,jsonLatLng})
    try {
      const res = await axios.put(`/update/property/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.status === 201) {
        await fetchPropertyData();
        setCurrentStep(0);
        console.log(res.data);
        alert(res.data.message);
      }
    } catch (error) {
      console.error(
        'Error updating property:',
        error.response || error.message
      );
    }
  };
  const handleImageClick = (file) => {
    const index = fileList.indexOf(file);
    if (index !== 0) {
      const newFileList = [...fileList];
      const [clickedImage] = newFileList.splice(index, 1);
      newFileList.unshift(clickedImage);
      setFileList(newFileList);
    }
  };
  useEffect(() => {
    if (propertyData && propertyData.listType) {
      setListingType(propertyData.listType);
    }
  }, [propertyData]);
  const handleListingTypeChange = (e) => {
    setListingType(e.target.value);
  };
  if (isLoading) {
    return <Loader />;
  }
  const handlePropertyTypeChange = (value) => {
    console.log('propertyType', value);
    setStaticPropertyType(value);
  };
  const {
    propertyName,
    province,
    city,
    address,
    price,
    bedrooms,
    bathrooms,
    floorSize,

    video,
    coverImage = [],
    imageUrls = [],
    referenceNote,
    descriptionEnglish,
    size,
    propertyType,
    rentDuration,
    contactName,
    contactEmail,
    contactNumber,
    contactAddress,
    priceType,
    amenities,
  } = propertyData;

  const cover = coverImage.map((url, index) => ({
    uid: `${-1}`,
    name: `cover_photo${index}.png`,
    status: 'done',
    url,
  }));

  const images = imageUrls.map((url, index) => ({
    uid: `${-1}`,
    name: `other_photo${index}.png`,
    status: 'done',
    url,
  }));
  console.log({ cover, images });
  const handleValuesChange = () => {
    setIsModified(true);
  };
  console.log(propertyData);
  const sections = [
    {
      title: 'Update Location',
      content: (
        <div className='bg-white p-10 rounded-lg'>
          <h1 className='mb-5 font-semibold text-2xl'>Update Location</h1>
          <Row gutter={16} >
            <Col xs={24} sm={12}>
              <Form.Item
                label='Name of the property'
                name='propertyName'
                rules={[{ required: true }]}
              >
                <Input size='large' placeholder='Please enter property name' />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label='Province'
                name='province'
                rules={[{ required: true }]}
              >
                <AutocompleteInput
                  // prefilledValue={province}
                  name='province'
                  onPlaceChanged={handlePlaceChanged}
                  placeholder='Please Enter province'
                  prefilledValue={
                    draggedData.province ||
                    savedFormValues?.province ||
                    province ||
                    ''
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label='City' name='city' rules={[{ required: true }]}>
                <AutocompleteInput
                  // prefilledValue={city}
                  prefilledValue={
                    draggedData.city || savedFormValues?.city || city || ''
                  }
                  name='city'
                  onPlaceChanged={handlePlaceChanged}
                  placeholder='Please Enter city'
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label='Address'
                name='address'
                rules={[{ required: true }]}
              >
                <Input size='large' placeholder='Please enter address' />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <MapLocation
              location={selectedLocation}
              setMap={setMap}
              setDraggedData={setDraggedData}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Update Details',
      content: (
        <div className='bg-white p-10 rounded-lg'>
          <h1 className='mb-5 font-semibold text-2xl'>
            Enter Property Details
          </h1>
          <Form.Item
            label='Listing Type'
            name='listingType'
            rules={[{ required: true }]}
          >
            <Radio.Group
              buttonStyle='solid'
              size='large'
              value={listingType}
              onChange={handleListingTypeChange}
              style={{ display: 'flex', gap: '10px' }}
              required
              disabled
            >
              <Radio.Button value='forSale'>For Sale</Radio.Button>
              <Radio.Button value='forRent'>For Rent</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label='Property Type'
            name='propertyType'
            rules={[{ required: true }]}
          >
            <Select
              size='large'
              placeholder='Select Property Type'
              onChange={handlePropertyTypeChange}
              required
            >
              {defaultProperType.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Row gutter={16}>
            {listingType === 'forRent' ? (
              <>
                {propertyType !== 'land' && (
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label='Daily Price (THB)'
                      name='dailyPrice'
                      rules={[
                        {
                          required:
                            staticPropertyType.dailyPrice ||
                            staticPropertyType.yearlyPrice ||
                            staticPropertyType.monthlyPrice
                              ? false
                              : true,
                        },
                      ]}
                    >
                      <Input size='large' />
                    </Form.Item>
                  </Col>
                )}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label='30 Year Leasing Price (THB)'
                    name='monthlyPrice'
                    rules={[
                      {
                        required:
                          staticPropertyType.dailyPrice ||
                          staticPropertyType.yearlyPrice ||
                          staticPropertyType.monthlyPrice
                            ? false
                            : true,
                      },
                    ]}
                  >
                    <Input size='large' />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label='90 Year Leasing Price (THB)'
                    name='yearlyPrice'
                    rules={[
                      {
                        required:
                          staticPropertyType.dailyPrice ||
                          staticPropertyType.yearlyPrice ||
                          staticPropertyType.monthlyPrice
                            ? false
                            : true,
                      },
                    ]}
                  >
                    <Input size='large' />
                  </Form.Item>
                </Col>
              </>
            ) : (
              <Col xs={24} sm={12}>
                <Form.Item
                  label='Price (THB)'
                  name='price'
                  rules={[{ required: true }]}
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
            )}

            {staticPropertyType !== 'land' && (
              <>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label='Bedrooms'
                    name='bedrooms'
                    rules={[{ required: true }]}
                  >
                    <Select size='large' placeholder='Select Bedrooms' required>
                      <Option value='1'>1</Option>
                      <Option value='2'>2</Option>
                      <Option value='3'>3</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label='Bathrooms'
                    name='bathrooms'
                    rules={[{ required: true }]}
                  >
                    <Select size='large' placeholder='Select Bathrooms'>
                      <Option value='1'>1</Option>
                      <Option value='2'>2</Option>
                      <Option value='3'>3</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </>
            )}
            <Col xs={24} sm={12}>
              <Form.Item
                label={
                  (listingType === 'forRent' || listingType === 'forSale') &&
                  staticPropertyType === 'land'
                    ? 'Land Size m²'
                    : 'House Size m²'
                }
                name='size'
                rules={[{ required: true }]}
              >
                <Input size='large' />
              </Form.Item>
            </Col>

            {(propertyType === 'apartment' ||
              propertyType === 'condo' ||
              propertyType === 'hotel') && (
              <Col xs={24} sm={12}>
                <Form.Item
                  label='Floor size'
                  name='floorSize'
                  rules={[{ required: true }]}
                >
                  <Select
                    size='large'
                    placeholder='Please select'
                    options={Array.from({ length: 60 }, (_, i) => ({
                      value: i + 1,
                      label: `${i + 1}`,
                    }))}
                  />
                </Form.Item>
              </Col>
            )}

            {propertyType !== 'land' && (
              <Col xs={24} sm={12}>
                <Form.Item label='Amenities' name='amenities'>
                  <Select
                    mode='multiple'
                    allowClear
                    size='large'
                    placeholder='Please select'
                    options={amenitiesData}
                  />
                </Form.Item>
              </Col>
            )}
          </Row>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label='Description'
                name='descriptionEnglish'
                rules={[{ required: true }]}
              >
                <Input.TextArea size='large' rows={4} required />
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: 'Update Media',
      content: (
        <div className='bg-white p-10 rounded-lg'>
          <h1 className='mb-5 font-semibold text-2xl'>Update Listing: Media</h1>
          <Form.Item label='Add Photos'>
            <Upload
              listType='picture-card'
              multiple
              maxCount={10}
              beforeUpload={() => false}
              fileList={fileList}
              onChange={handleChange}
              itemRender={(originNode, file, currFileList) => (
                <div
                  onClick={() => handleImageClick(currFileList.indexOf(file))}
                >
                  {originNode}
                </div>
              )}
            >
              {fileList.length >= 10 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload Image</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          {fileList.length > 0 && (
            <Form.Item label='Cover Photo'>
              <Upload
                listType='picture-card'
                fileList={[fileList[0]]}
                showUploadList={{
                  showPreviewIcon: false,
                  showRemoveIcon: false,
                }}
                itemRender={(originNode) => (
                  <div onClick={() => handleImageClick(0)}>{originNode}</div>
                )}
              />
            </Form.Item>
          )}

          {fileList.length > 1 && (
            <Form.Item label='Other Photos'>
              <Upload
                listType='picture-card'
                fileList={fileList.slice(1)}
                showUploadList={{
                  showPreviewIcon: false,
                  showRemoveIcon: false,
                }}
                itemRender={(originNode, file) => (
                  <div onClick={() => handleImageClick(fileList.indexOf(file))}>
                    {originNode}
                  </div>
                )}
              />
            </Form.Item>
          )}

          <Form.Item
            name='video'
            label='Add Video'
            rules={[
              {
                type: 'url',
                message: 'Please enter a valid URL',
              },
              { required: true },
            ]}
          >
            <Input placeholder='Provide a video link from YouTube' />
          </Form.Item>
        </div>
      ),
    },
    // {
    //   title: "Update Contact Information",
    //   content: (
    //     <div className="bg-white p-10 rounded-lg">
    //       <h1 className="mb-5 font-semibold text-2xl">
    //         Update Your Contact Information
    //       </h1>
    //       <Row gutter={16}>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your name"
    //             name="contactName"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your Email"
    //             name="contactEmail"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //       </Row>
    //       <Row gutter={16}>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your number"
    //             name="contactNumber"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //         <Col xs={24} sm={12}>
    //           <Form.Item
    //             label="Your address"
    //             name="contactAddress"
    //             rules={[{ required: true }]}
    //           >
    //             <Input size="large" disabled />
    //           </Form.Item>
    //         </Col>
    //       </Row>
    //     </div>
    //   ),
    // },
  ];

  return (
    <Form
      form={form}
      layout='vertical'
      initialValues={{
        propertyName,
        province,
        city,
        address,
        price,
        bedrooms,
        bathrooms,
        floorSize,
        video,
        referenceNote,
        descriptionEnglish,
        size,
        contactName,
        contactEmail,
        contactNumber,
        contactAddress,
        rentDuration,
        priceType,
        propertyType,
        amenities,
      }}
      onValuesChange={handleValuesChange}
      className='lg:p-10 p-5 bg-dark2/10'
    >
      <DashboardHeader
        title='Update Property'
        description='We are glad to see you again!'
      />
      <Steps current={currentStep}>
        {sections.map((section, index) => (
          <Steps.Step key={index} title={section.title} />
        ))}
      </Steps>
      <div className='mt-5'>{sections[currentStep].content}</div>
      <div className='flex justify-between mt-4'>
        {currentStep > 0 && (
          <Button type='default' size='large' onClick={handlePreviousStep}>
            Previous
          </Button>
        )}
        {currentStep < sections.length - 1 && (
          <Button
            className='bg-blue-500 text-white'
            type='primary'
            size='large'
            onClick={handleNextStep}
          >
            Next
          </Button>
        )}
        {currentStep === sections.length - 1 && (
          <Button
            className='bg-blue-500 text-white'
            type='primary'
            size='large'
            onClick={handleUpdateButton}
          >
            Update
          </Button>
        )}
      </div>
    </Form>
  );
};

export default UpdateProperty;
