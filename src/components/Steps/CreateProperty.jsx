import React, { useEffect, useState } from "react";
import axios from "axios";
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
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import DashboardHeader from "./../../pages/dashboard/DashboardHeader";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import AutocompleteInput from "./AutoCompleate";
import { defaultProperType } from "../../constants/footerItem";
import MapLocation from "./MapLocation";

const { Option } = Select;

const CreateProperty = () => {
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [prices, setPrices] = useState({});
  const [savedFormValues, setSavedFormValues] = useState({});
  const [listingType, setListingType] = useState("forSale");
  const [propertyType, setPropertyType] = useState("condo");
  const [map, setMap] = useState(null);
  const [draggedData, setDraggedData] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 13.736717,
    lng: 100.523186,
  });
  const { user } = useContext(AuthContext);
  console.log({ selectedLocation });

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
  const navigate = useNavigate();
  const handleUpdateButton = async (type) => {
    console.log({ type });

    if (type === "next") {
      setSavedFormValues((prevValues) => ({
        ...prevValues,
        ...form.getFieldsValue(),
      }));
      setCurrentStep(currentStep + 1);
    } else {
      if (fileList?.length < 5) {
        return alert("Upload atleast 5 images!");
      }

      setIsLoading(true);
      // Collect form values
      const values = { ...savedFormValues, ...form.getFieldsValue() };

      console.log({ values });

      const formData = new FormData();

      for (const key in values) {
        if (values.hasOwnProperty(key) && values[key] !== undefined) {
          if (Array.isArray(values[key])) {
            values[key].forEach((item) => formData.append(key, item));
          } else {
            formData.append(key, values[key]);
          }
        }
      }
      console.log({ values });
      formData.append("email", user.email);
      const latLng = {
        lat: selectedLocation.lat,
        lng: selectedLocation.lng,
      };

      const jsonLatLng = JSON.stringify(latLng);

      formData.append("latLng", jsonLatLng);
      // Append files to FormData
      if (fileList.length) {
        formData.append("coverImage", fileList[0].originFileObj);
        fileList.slice(1).forEach((file) => {
          formData.append("imageUrls", file.originFileObj);
        });
      }

      try {
        // Send POST request to create property
        const res = await axios.post(`/create/property`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res.status === 201) {
          setIsLoading(false);
          // alert(res.data.message);
          navigate("/dashboard/my-properties");
          // formData.reset();

          setCurrentStep(0);
        }
      } catch (error) {
        console.error(
          "Error creating property:",
          error.response || error.message
        );
        // formData.reset();
        setIsLoading(false);
        alert("Error creating property. Please try again."); // Show error message
      }
    }
  };

  console.log({ savedFormValues });
  const handleImageClick = (file) => {
    const index = fileList.indexOf(file);
    if (index !== 0) {
      const newFileList = [...fileList];
      const [clickedImage] = newFileList.splice(index, 1);
      newFileList.unshift(clickedImage);
      setFileList(newFileList);
    }
  };

  const handleListingTypeChange = (e) => {
    setListingType(e.target.value);
  };

  if (isLoading) {
    return <Loader />;
  }

  const handleValuesChange = () => {
    // setIsModified(true);
  };
  const handlePropertyTypeChange = (value) => {
    console.log("propertyType", value);
    setPropertyType(value);
  };

  console.log({ fileList });

  const amenities = [
    {
      label: "Air Conditioning",
      value: "Air Conditioning",
    },
    {
      label: "Balcony",
      value: "Balcony",
    },
    {
      label: "Dining Room Furniture",
      value: "Dining Room Furniture",
    },
    {
      label: "Fridge",
      value: "Fridge",
    },
    {
      label: "Penthouse",
      value: "Penthouse",
    },
    {
      label: "Renovated",
      value: "Renovated",
    },
    {
      label: "Television",
      value: "Television",
    },
  ];

  const sections = [
    {
      title: "Create Location",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Update Location</h1>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Name of the property"
                name="propertyName"
                rules={[{ required: true }]}
              >
                <Input size="large" placeholder="Please enter property name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Province"
                name="province"
                rules={[{ required: true }]}
              >
                <AutocompleteInput
                  name="province"
                  onPlaceChanged={handlePlaceChanged}
                  placeholder="Please Enter province"
                  prefilledValue={
                    draggedData.province || savedFormValues?.province || ""
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item label="City" name="city" rules={[{ required: true }]}>
                <AutocompleteInput
                  name="city"
                  onPlaceChanged={handlePlaceChanged}
                  placeholder="Please Enter city"
                  prefilledValue={
                    draggedData.city || savedFormValues?.city || ""
                  }
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true }]}
              >
                <AutocompleteInput
                  name="location"
                  onPlaceChanged={handlePlaceChanged}
                  placeholder="Please Enter location"
                  prefilledValue={
                    draggedData.location || savedFormValues?.location || ""
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <MapLocation
              location={selectedLocation}
              setMap={setMap}
              setDraggedData={setDraggedData}
              onPlaceChanged={handlePlaceChanged}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Create Details",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">
            Enter Property Details
          </h1>

          <Form.Item
            label="Listing Type"
            name="listingType"
            rules={[{ required: true }]}
          >
            <Radio.Group
              buttonStyle="solid"
              size="large"
              value={listingType}
              onChange={handleListingTypeChange}
              style={{ display: "flex", gap: "10px" }}
              required
            >
              <Radio.Button value="forSale">For Sale</Radio.Button>
              <Radio.Button value="forRent">For Rent</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Row gutter={16}>
            <Col xs={24} sm={24}>
              <Form.Item
                label="Property Type"
                name="propertyType"
                rules={[{ required: true }]}
              >
                <Select
                  size="large"
                  placeholder="Select Property Type"
                  value={propertyType}
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
            </Col>
          </Row>

          {listingType === "forRent" && (
            <p className="pb-1">Please provide atleast one price</p>
          )}
          <Row gutter={16}>
            {listingType === "forRent" ? (
              <>
                {propertyType !== "land" && (
                  <Col xs={24} sm={8}>
                    <Form.Item
                      label="Daily Price (THB)"
                      name="dailyPrice"
                      rules={[
                        {
                          required:
                            prices.dailyPrice ||
                            prices.yearlyPrice ||
                            prices.monthlyPrice
                              ? false
                              : true,
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        onChange={(e) =>
                          setPrices({ ...prices, dailyPrice: e.target.value })
                        }
                      />
                    </Form.Item>
                  </Col>
                )}
                <Col xs={24} sm={8}>
                  <Form.Item
                    label="Monthly Price (THB)"
                    name="monthlyPrice"
                    rules={[
                      {
                        required:
                          prices.dailyPrice ||
                          prices.yearlyPrice ||
                          prices.monthlyPrice
                            ? false
                            : true,
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      onChange={(e) =>
                        setPrices({ ...prices, monthlyPrice: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={8}>
                  <Form.Item
                    label="Yearly Price (THB)"
                    name="yearlyPrice"
                    rules={[
                      {
                        required:
                          prices.dailyPrice ||
                          prices.yearlyPrice ||
                          prices.monthlyPrice
                            ? false
                            : true,
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      onChange={(e) =>
                        setPrices({ ...prices, yearlyPrice: e.target.value })
                      }
                    />
                  </Form.Item>
                </Col>
              </>
            ) : (
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Price (THB)"
                  name="price"
                  rules={[{ required: true }]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
            )}

            {propertyType !== "land" && (
              <>
                <Col xs={24} sm={8}>
                  <Form.Item
                    label="Bedrooms"
                    name="bedrooms"
                    rules={[{ required: true }]}
                  >
                    <Select size="large" placeholder="Select Bedrooms" required>
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={8}>
                  <Form.Item
                    label="Bathrooms"
                    name="bathrooms"
                    rules={[{ required: true }]}
                  >
                    <Select size="large" placeholder="Select Bathrooms">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </>
            )}
            <Col xs={24} sm={8}>
              <Form.Item
                label={
                  (listingType === "forRent" || listingType === "forSale") &&
                  propertyType === "land"
                    ? "Land Size m²"
                    : "House Size m²"
                }
                name="size"
                rules={[{ required: true }]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            {(propertyType === "apartment" ||
              propertyType === "condo" ||
              propertyType === "hotel") && (
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Floor size"
                  name="floorSize"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    placeholder="Please select"
                    options={Array.from({ length: 60 }, (_, i) => ({
                      value: i + 1,
                      label: `${i + 1}`,
                    }))}
                  />
                </Form.Item>
              </Col>
            )}

            {propertyType !== "land" && (
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Amenities"
                  name="amenities"
                  rules={[{ required: true }]}
                >
                  <Select
                    mode="multiple"
                    allowClear
                    size="large"
                    placeholder="Please select"
                    options={amenities}
                  />
                </Form.Item>
              </Col>
            )}

            <Col xs={24} sm={8}>
              <Form.Item
                label="Headline"
                name="headline"
                rules={[{ required: true }]}
              >
                <Input size="large" type="text" />
              </Form.Item>
            </Col>
          </Row>

          {/* <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item
                label="Headline"
                name="headline"
                rules={[{ required: true }]}
              >
                <Input size="large" type="text" />
              </Form.Item>
            </Col>
          </Row> */}
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                label="Description"
                name="descriptionEnglish"
                rules={[{ required: true }]}
              >
                <Input.TextArea size="large" rows={4} />
              </Form.Item>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: "Create Media",
      content: (
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold text-2xl">Create Listing: Media</h1>
          <Form.Item label="Add Photos">
            <Upload
              listType="picture-card"
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
            <Form.Item label="Cover Photo">
              <Upload
                listType="picture-card"
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

          {/* {fileList.length > 1 && (
            <Form.Item label="Other Photos">
              <Upload
                listType="picture-card"
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
          )} */}

          <Form.Item
            name="video"
            label="Add Video"
            rules={[
              {
                type: "url",
                message: "Please enter a valid URL",
              },
              { required: false },
            ]}
          >
            <Input placeholder="Provide a video link from YouTube" />
          </Form.Item>
        </div>
      ),
    },
    // {
    //   title: "Contact Information",
    //   content: (
    //     <div className="bg-white p-10 rounded-lg">
    //       <h1 className="mb-5 font-semibold text-2xl">
    //         Update Your Contact Information
    //       </h1>
    //       {user.phone && user.address ? (
    //         <></>
    //       ) : (
    //         <div>
    //           <p className="text-rose-500">
    //             Please Updete your Profile nad Provide - Username,Email,Phone
    //             and Address to create Property.{" "}
    //           </p>
    //           <Link
    //             className="text-sky-600 underline"
    //             to="/dashboard/my-profile"
    //           >
    //             Click Here-Update Profile
    //           </Link>
    //         </div>
    //       )}
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
      layout="vertical"
      autoComplete="none"
      initialValues={{
        // contactName: user?.name || "",
        // contactEmail: user?.email || "",
        // contactNumber: user?.phone || "",
        // contactAddress: user?.address || "",
        // priceType: "THB",
        // bathrooms: "1",
        // bedrooms: "1",
        listingType: savedFormValues?.listingType || "forSale",
        city: savedFormValues?.city,
        propertyType: propertyType || "condo",
      }}
      onValuesChange={handleValuesChange}
      className="lg:p-10 p-5 bg-dark2/10"
      onFinish={() =>
        currentStep === sections.length - 1
          ? handleUpdateButton("create")
          : handleUpdateButton("next")
      }
    >
      <DashboardHeader
        title="Create Property"
        description="We are glad to see you again!"
      />
      <Steps current={currentStep}>
        {sections.map((section, index) => (
          <Steps.Step key={index} title={section.title} />
        ))}
      </Steps>
      <div className="mt-5">{sections[currentStep].content}</div>
      <div
        className={`flex ${
          currentStep > 0 ? "justify-between" : "justify-end"
        } justify-end mt-4`}
      >
        {currentStep > 0 && (
          <Button type="default" size="large" onClick={handlePreviousStep}>
            Previous
          </Button>
        )}
        {currentStep < sections.length - 1 && (
          <Button
            className="bg-blue-500 text-white"
            type="primary"
            size="large"
            // onClick={() => handleUpdateButton("next")}
            htmlType="submit"
          >
            Next
          </Button>
        )}
        {currentStep === sections.length - 1 && (
          <Button
            className="bg-blue-500 text-white"
            type="primary"
            size="large"
            htmlType="submit"
            // disabled={!(user.phone && user.address)}
            // onClick={() => handleUpdateButton("create")}
          >
            Create
          </Button>
        )}
      </div>
    </Form>
  );
};

export default CreateProperty;
