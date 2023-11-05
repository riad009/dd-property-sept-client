import React, { useContext } from "react";
import DashboardHeader from "./DashboardHeader";
import { useState } from "react";
import {Select } from "antd";
import { uplaodImgBB } from "../../../utils/uploadImg";
import { createProperty } from "../../../utils/createProperty";
import { AuthContext, AuthProvider } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const CreateListing = () => {
  const [carouselImages,setCarouselImages]=useState([])
  const [profileImage,setProfileImage]=useState("")
  const [propertyType,setPropertyType]=useState('condo')
  const {currentUser} = useContext(AuthContext)

  const handleProfileImage = async(e)=>{
    const image = e.target.files
    const formData = new FormData()
    formData.append("image",image[0])
    await uplaodImgBB(formData).then(data=>{
      console.log(data?.data?.url)
      if(data?.data?.url){
        setProfileImage(data?.data?.url)
        console.log(profileImage)
      }
    })
  }

  const handleCarouselImages= async(e)=>{
    const image = e.target.files
    const formData = new FormData()
    formData.append("image",image[0])
    await uplaodImgBB(formData).then(data=>{
      console.log(data?.data?.url)
      if(data?.data?.url){
        setCarouselImages([...carouselImages,data?.data?.url])
      }
    })
    
  }

  const handleSubmit =async(e)=>{
   e.preventDefault()
   const form = e.target;
   const propertyTitle = form.propertyTitle.value;
   const descripton = form.description.value;

   const address = form.address.value;
   const state = form.state.value;
   const city = form.city.value;
   const zip = form.zip.value;
   const country = form.country.value;

   const propertyId = form.propertyId.value;
   const startPrice = form.startPrice.value;
   const monthlyInstallments = form.monthlyInstallments.value;
   const bedrooms = form.bedrooms.value;
   const bathrooms = form.bathrooms.value;
   const area = form.area.value;
   const completionYear = form.completionYear.value;


   const property = {
    email:currentUser?.email,
    propertyTitle,
    descripton,
    propertyType,
    location:{
      address,
      state,
      city,
      zip,
      country,
    },
    detailInformation:{
      propertyId,
      startPrice,
      monthlyInstallments,
      bedrooms,
      bathrooms,
      area,
      completionYear
    },
    propertyProfile:profileImage,
    carouselImages
   }
  
   await createProperty(property)
   .then(data=>{
    if(data?.acknowledged){
       form.reset()
       toast.success("successfully added")
       setCarouselImages([])
       setProfileImage("")
    }
   })
  }

  return (
    <div className="lg:p-10 p-5 bg-dark2/10">
      <DashboardHeader
        title={"Add New Property"}
        description={"We are glad to see you again!"}
      />
      <form onSubmit={handleSubmit} className="mt-5">
        {/* Create Listing */}
        <div className="bg-white p-10 rounded-lg">
          <h1 className="mb-5 font-semibold">Create Listing</h1>
          {/* property title */}
          <label>
            <p className="font-semibold text-sm text-gray-700">Property Title</p>
            <input required name="propertyTitle" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="Enter property title" />
          </label>
          {/* description */}
          <label>
            <p className="font-semibold text-sm text-gray-700">Description</p>
            <textarea required className="border w-[100%] px-3 py-3 rounded-lg my-3" name="description"  rows="4"></textarea>
          </label>
        {/* property type */}
          <div className="">
            <div className="w-full">
              <h1 className="block text-gray-700 text-sm font-bold mb-2">
                Property Type
              </h1>
              <Select
                defaultValue="condo"
                onChange={(value) => setPropertyType(value)}
                options={[
                  { value: "condo", label: "condo" },
                  { value: "detached house", label: "detached house" },
                  { value: "town house", label: "town house" },
                  { value: "land", label: "land",},
                  { value: "aparment", label: "aparment",},
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
            {/* address */}
            <label>
              <p className="font-semibold text-sm text-gray-700">Address</p>
              <input required name="address" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="" />
            </label>
            {/* state */}
            <label>
              <p className="font-semibold text-sm text-gray-700">State</p>
              <input required name="state" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="" />
            </label>
            {/* city */}
            <label>
              <p className="font-semibold text-sm text-gray-700">City</p>
              <input required name="city" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="" />
            </label>
            {/* zip */}
            <label>
              <p className="font-semibold text-sm text-gray-700">Zip</p>
              <input required name="zip" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="" />
            </label>
            {/* country */}
            <label>
              <p className="font-semibold text-sm text-gray-700">Country</p>
              <input required name="country" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="" />
            </label>
          </div>
        </div>
        {/* detailed information */}
        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Detailed Information</h1>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {/* property id */}
            <label>
              <p className="font-semibold text-sm text-gray-700">Property Id</p>
              <input required name="propertyId" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="text" placeholder="" />
            </label>
            {/* start Price */}
            <label>
              <p className="font-semibold text-sm text-gray-700">Start Price</p>
              <input required name="startPrice" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="number" placeholder="" />
            </label>
            {/* monthly installments */}
            <label>
              <p className="font-semibold text-sm text-gray-700 capitalize">monthly installments</p>
              <input required name="monthlyInstallments" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="number" placeholder="" />
            </label>
            {/* bedrooms */}
            <label>
              <p className="font-semibold text-sm text-gray-700 capitalize">bedrooms</p>
              <input required name="bedrooms" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="number" placeholder="" />
            </label>
            {/* bathrooms */}
            <label>
              <p className="font-semibold text-sm text-gray-700 capitalize">bathrooms</p>
              <input required name="bathrooms" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="number" placeholder="" />
            </label>
            {/* area */}
            <label>
              <p className="font-semibold text-sm text-gray-700 capitalize">area</p>
              <input required name="area" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="number" placeholder="" />
            </label>
            {/* completionYear */}
            <label>
              <p className="font-semibold text-sm text-gray-700 capitalize">completion Year</p>
              <input required name="completionYear" className="border w-[100%] px-3 py-3 rounded-lg my-3" type="number" placeholder="" />
            </label>
          </div>
        </div>

        <div className="p-10 bg-white mt-5 rounded-lg">
          <h1 className="font-semibold mb-5 text-xl">Property Media</h1>
          {/* profile image */}
          <label>
              <p className="font-semibold text-lg text-gray-700 capitalize">Property profile image</p>
              {
                profileImage && <img className="my-5 h-[150px]" src={profileImage && profileImage} alt="" />
              }
              <input required onChange={handleProfileImage} type="file" className="file-input file-input-bordered w-full max-w-xs my-2" />
            </label>
          {/* carousel images */}
          <label>
              <p className="font-semibold text-lg text-gray-700 capitalize">carousel images</p>
              <p className="text-red-500 text-sm">Add multiple image for carousel</p>
              <div className="flex flex-wrap">
              {
                carouselImages && carouselImages.map(image=><img className="my-5 h-[150px] mx-5" src={image&&image} alt="" />)
              }
              </div>
              <input required onChange={handleCarouselImages} type="file" className="file-input file-input-bordered w-full max-w-xs my-2" />
            </label>
        </div>
      <div className="flex justify-end">
        <button
          className="bg-danger text-white py-2 px-4 rounded-lg mt-4 w-full"
          type="submit"
        >
          Add to List
        </button>
      </div>
      </form>
    </div>
  );
};

export default CreateListing;
