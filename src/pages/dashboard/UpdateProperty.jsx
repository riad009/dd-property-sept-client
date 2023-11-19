import React from "react";
import ProfileInput from "../../components/ProfileInput";
import DashboardHeader from "./DashboardHeader";
import { useState } from "react";
import { Button, Checkbox, Select, Upload } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { AuthContext, useUserContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import axios from "axios";

const UpdateProperty = () => {
  const [propertyTitle, setPropertyTitle] = useState();
  const [description, setDescription] = useState();
  const [propertyType, setPropertyType] = useState();
  const [status, setStatus] = useState();
  const [unit, setunit] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();

  const [address, setAddress] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [googleMapStreetView, setGoogleMapStreetView] = useState("");

  const [propertyId, setPropertyId] = useState("");
  const [developer, setDeveloper] = useState("");
  const [tenure, setTenure] = useState("");
  const [areaSize, setAreaSize] = useState("");
  const [sizePrefix, setSizePrefix] = useState("");
  const [landArea, setLandArea] = useState("");
  const [landAreaSizePostfix, setLandAreaSizePostfix] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garages, setGarages] = useState("");
  const [garageSize, setGarageSize] = useState("");
  const [yearBuild, setYearBuild] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [virtualTourUrl, setVirtualTourUrl] = useState("");
  const [amenities, setAmenities] = useState("");
  const [category, setCategory] = useState("");

  const plainOptions = [
    "Air Conditionning",
    "Barbeque",
    "Dryer",
    "Gym",
    "Laundry",
    "Microwave",
    "Outdoor Shower",
    "Refrigerator",
    "Sauna",
    "Lawn",
    "TV Cable",
    "Washer",
    "Wifi",
    "Window Coverings",
    "Swimming Pool",
  ];

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  // File Attachment
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });
    setUploading(true);
    fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const fileProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  // Plan States
  const [planDescription, setPlanDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [planBedrooms, setPlanBedrooms] = useState("");
  const [planBathrooms, setPlanBathrooms] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [pricePostfix, setPricePostfix] = useState("");
  const [planSize, setPlanSize] = useState("");
  const [planImage, setPlanImage] = useState(null);
  const [category2, setCategory2] = useState(null);
  const [mainImg, setmainImg] = useState();

  const handlePlanImageChange = (info) => {
    if (info.file.status === "done") {
      setPlanImage(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };


  // handleclick

  const { user } = useContext(AuthContext)
  const { propertyUpdateId } = useUserContext();

 

  // update

  const handleUpdateButton = async (e) => {
    console.log('click')

    const userdata = {
      propertyTitle,
      email: user?.email,
      planDescription,
      loading,
      planBedrooms,
      planBathrooms,
      planPrice,
      pricePostfix,
      planSize,
      planImage,
      description,
      propertyType,
      unit,
      price: parseInt(price),
      area,
      address,
      district,
      city,
      neighborhood,
      zip,
      country,
      googleMapStreetView,
      propertyId,
      areaSize,
      sizePrefix,
      landArea,
      landAreaSizePostfix,
      bedrooms,
      bathrooms,
      garages,
      garageSize,
      yearBuild,
      videoUrl,
      virtualTourUrl,
      amenities,
      tenure,
      developer,
      category2,
      category,
      mainImg,
    };


    try {
      const response = await axios.put(`https://server-khaki-kappa.vercel.app/update/property/${propertyUpdateId}`, userdata);


    } catch (error) {
      if (error.response) {

        console.error('Error Status:', error.response.status);
        console.error('Error Data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {

        console.error('Error message:', error.message);
      }

    }
  };

  // update
  return (
    <div className="lg:p-10 p-5 bg-dark2/10">
      <DashboardHeader
        title={"Add New Property"}
        description={"We are glad to see you again!"}
      />
      <div className="mt-5">
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold">Create Listing</h1>
          <ProfileInput
            label="Property Title"
            value={propertyTitle}
            onChange={(e) => setPropertyTitle(e.target.value)}
          />
          <ProfileInput
            label="Property thumbnail - ( provide img link) "
          
            
            onChange={(e) => setmainImg(e.target.value)}
          
          />

          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="aboutMe"
            >
              Description
            </label>
            <textarea
              id="aboutMe"
              className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="md:flex gap-5 my-7">
            <div className="w-full">
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Category
              </h1>
              <Select
                // defaultValue="condos"
                onChange={(value) => setCategory(value)}
                options={[

                  { value: "condos", label: "Buy Condos Near BTS/MRT" },
                  { value: "curated", label: "Curated Collections" },

                ]}
                size="large"
                className="w-full"
              />


            </div>

            <div className="w-full">
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Type
              </h1>
              <Select
                defaultValue=""
                onChange={(value) => setPropertyType(value)}
                options={[
                  { value: "handpicked", label: "Handpicked for you" },
                  { value: "videos", label: "Videos & Virtual Tours " },
                  { value: "", label: "null" },

                ]}
                size="large"
                className="w-full"
              />


            </div>
            <div className="w-full">
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Status
              </h1>
              <Select
                size="large"
                defaultValue={"verify"}
                onChange={(value) => setStatus(value)}
                options={[
                  { value: "verify", label: "verify" },
                  { value: "not verify", label: "not verify" },

                ]}
                className="w-full"
              />
            </div>
          </div>
          {/* group field */}

          {
            category == 'condos' ?
              <><div className="w-1/2 my-5">
                <h1 className="block text-gray-700 text-sm font-bold mb-2">

                  Category 2- <span className="text-red-400"> Area By condos</span>

                </h1>
                <Select
                  defaultValue=""
                  onChange={(value) => setCategory2(value)}
                  options={[
                    { value: "Condos Near BTS Silom Line", label: "Condos Near BTS Silom Line" },
                    { value: "Condos Near Airport Link", label: "Condos Near Airport Link" },
                    { value: "Condos Near MRT Purple Line", label: "Condos Near MRT Purple Line" },
                    { value: "Condos Near BTS Sukhumvit Line", label: "Condos Near BTS Sukhumvit Line" },

                  ]}
                  size="large"
                  className="w-full"
                />


              </div>
              </>
              :
              category == 'curated' ?
                <>
                  <><div className="w-1/2 my-5">
                    <h1 className="block text-gray-700 text-sm font-bold mb-2">
                      Category 2 - <span className="text-red-400">Area By Curated Collections</span>
                    </h1>
                    <Select
                      defaultValue=""
                      onChange={(value) => setCategory2(value)}
                      options={[
                        { value: "Affordable condo in Thailand", label: "Affordable condo in Thailand" },
                        { value: "Stay in the bustling Bangkok", label: "Stay in the bustling Bangkok" },
                        { value: "Condo near BTS Thong Lo", label: "Condo near BTS Thong Lo" },
                        { value: "Luxury stay in Bangkok", label: "Luxury stay in Bangkok" },

                      ]}
                      size="large"
                      className="w-full"
                    />


                  </div>
                  </>
                </>
                :
                <>Category Not selected</>
          }




          {/* group field */}
          <div className="md:grid grid-cols-3 gap-5 my-10">
            <ProfileInput
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <ProfileInput
              label="Area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
            <div>
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Unit
              </h1>
              <Select
                defaultValue=""
                onChange={(value) => setunit(value)}
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4" },
                  { value: "5", label: "5" },
                  { value: "6", label: "6" },
                  { value: "7", label: "7" },

                ]}
                size="large"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Location</h1>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <ProfileInput
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <ProfileInput
              label="District"
              value={district}
              onChange={(e) => setdistrict(e.target.value)}
            />
            <ProfileInput
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <ProfileInput
              label="Neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <ProfileInput
              label="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <ProfileInput
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <ProfileInput
              label="Google Map Street View"
              value={googleMapStreetView}
              onChange={(e) => setGoogleMapStreetView(e.target.value)}
            />
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Detailed Information</h1>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <ProfileInput
              label="Property ID"
              value={propertyId}
              onChange={(e) => setPropertyId(e.target.value)}
            />
            <ProfileInput
              label="Tenure"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />
            <ProfileInput
              label="Developer"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
            <ProfileInput
              label="Area Size"
              value={areaSize}
              onChange={(e) => setAreaSize(e.target.value)}
            />
            <ProfileInput
              label="Size Prefix"
              value={sizePrefix}
              onChange={(e) => setSizePrefix(e.target.value)}
            />
            <ProfileInput
              label="Land Area"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
            />
            <ProfileInput
              label="Land Area Size Postfix"
              value={landAreaSizePostfix}
              onChange={(e) => setLandAreaSizePostfix(e.target.value)}
            />
            <ProfileInput
              label="Bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            <ProfileInput
              label="Bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
            <ProfileInput
              label="Garages"
              value={garages}
              onChange={(e) => setGarages(e.target.value)}
            />
            <ProfileInput
              label="Garage Size"
              value={garageSize}
              onChange={(e) => setGarageSize(e.target.value)}
            />
            <ProfileInput
              label="Year Build"
              value={yearBuild}
              onChange={(e) => setYearBuild(e.target.value)}
            />
            <ProfileInput
              label="Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <ProfileInput
              label="360 Degree Virtual Tour"
              value={virtualTourUrl}
              onChange={(e) => setVirtualTourUrl(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <h1 className="block text-gray-700 font-bold mb-2">Amenities</h1>
            <Checkbox.Group
              className="md:grid grid-cols-4 gap-5"
              options={plainOptions}
              onChange={(value) => setAmenities(value)}
            />
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Property Media</h1>
          <div className="w-full">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Drag and Drop Images here</p>
            </Dragger>
          </div>
          <h1 className="font-semibold my-5 text-xl">Attachments</h1>
          <div className="w-full">
            <Upload {...fileProps}>
              <Button size="large" icon={<UploadOutlined />}>
                Select File
              </Button>
            </Upload>
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Property Media</h1>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <ProfileInput
              label="Plan Bedrooms"
              value={planBedrooms}
              onChange={(e) => setPlanBedrooms(e.target.value)}
            />
            <ProfileInput
              label="Plan Bathrooms"
              value={planBathrooms}
              onChange={(e) => setPlanBathrooms(e.target.value)}
            />
            <ProfileInput
              label="Plan Price"
              value={planPrice}
              onChange={(e) => setPlanPrice(e.target.value)}
            />
            <ProfileInput
              label="Price Postfix"
              value={pricePostfix}
              onChange={(e) => setPricePostfix(e.target.value)}
            />
            <ProfileInput
              label="Plan Size"
              value={planSize}
              onChange={(e) => setPlanSize(e.target.value)}
            />
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Plan Image
              </label>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                // beforeUpload={beforeUpload}
                onChange={handlePlanImageChange}
              >
                {planImage ? (
                  <img src={planImage} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                )}
              </Upload>
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="planDescription"
                >
                  Description
                </label>
                <textarea
                  id="planDescription"
                  className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  value={planDescription}
                  onChange={(e) => setPlanDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
       
            <button
              className="bg-green-400 text-black  py-2 px-4 rounded-lg mt-4 w-full"
              onClick={handleUpdateButton}
            >
              Update
            </button>
        
       

        
      </div>
    </div>
  );
};

export default UpdateProperty;
