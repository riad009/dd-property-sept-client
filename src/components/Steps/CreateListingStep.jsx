import { Select } from "antd";
import { useState } from "react";
import ProfileInput from "../ProfileInput";
import FormInput from "../forms/FormInput";
import FormtTextarea from "../forms/FormTextarea";
import FormSelectField from "../forms/FormSelectField";

const CreateListingStep = () => {
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState();
  const [status, setStatus] = useState();
  const [category2, setCategory2] = useState(null);
  const [unit, setunit] = useState();
  return (
    // <div className="bg-white lg:p-10 p-5 rounded-lg">
    //   <ProfileInput
    //     name="propertyTitle"
    //     label="Property Title"
    //     // value={propertyTitle}
    //     // onChange={(e) => setPropertyTitle(e.target.value)}
    //   />
    //   <ProfileInput
    //     label="Property thumbnail - ( provide img link) "
    //     name="mainImg"
    //     // onChange={(e) => setmainImg(e.target.value)}
    //   />

    //   <div className="mt-4">
    //     <label
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //       htmlFor="aboutMe"
    //     >
    //       Description
    //     </label>
    //     <textarea
    //       name="description"
    //       id="aboutMe"
    //       className="w-full px-3 py-2 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
    //       // value={description}
    //       // onChange={(e) => setDescription(e.target.value)}
    //     ></textarea>
    //   </div>

    //   <div className="md:flex gap-5 my-7">
    //     <div className="w-full">
    //       <h1 className="block text-gray-700 text-sm font-bold mb-2">
    //         Category
    //       </h1>
    //       <Select
    //         defaultValue="condos"
    //         onChange={(value) => setCategory(value)}
    //         options={[
    //           { value: "condos", label: "Buy Condos Near BTS/MRT" },
    //           { value: "curated", label: "Curated Collections" },
    //         ]}
    //         size="large"
    //         className="w-full"
    //       />
    //     </div>

    //     <div className="w-full">
    //       <h1 className="block text-gray-700 text-sm font-bold mb-2">Type</h1>
    //       <Select
    //         defaultValue=""
    //         onChange={(value) => setPropertyType(value)}
    //         options={[
    //           { value: "handpicked", label: "Handpicked for you" },
    //           { value: "videos", label: "Videos & Virtual Tours " },
    //           { value: "", label: "null" },
    //         ]}
    //         size="large"
    //         className="w-full"
    //       />
    //     </div>
    //     <div className="w-full">
    //       <h1 className="block text-gray-700 text-sm font-bold mb-2">Status</h1>
    //       <Select
    //         size="large"
    //         defaultValue={"verify"}
    //         onChange={(value) => setStatus(value)}
    //         options={[
    //           { value: "verify", label: "verify" },
    //           { value: "not verify", label: "not verify" },
    //         ]}
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    //   {/* group field */}

    //   {category == "condos" ? (
    //     <>
    //       <div className="w-1/2 my-5">
    //         <h1 className="block text-gray-700 text-sm font-bold mb-2">
    //           Category 2- <span className="text-red-400"> Area By condos</span>
    //         </h1>
    //         <Select
    //           defaultValue=""
    //           onChange={(value) => setCategory2(value)}
    //           options={[
    //             {
    //               value: "Condos Near BTS Silom Line",
    //               label: "Condos Near BTS Silom Line",
    //             },
    //             {
    //               value: "Condos Near Airport Link",
    //               label: "Condos Near Airport Link",
    //             },
    //             {
    //               value: "Condos Near MRT Purple Line",
    //               label: "Condos Near MRT Purple Line",
    //             },
    //             {
    //               value: "Condos Near BTS Sukhumvit Line",
    //               label: "Condos Near BTS Sukhumvit Line",
    //             },
    //           ]}
    //           size="large"
    //           className="w-full"
    //         />
    //       </div>
    //     </>
    //   ) : category == "curated" ? (
    //     <>
    //       <>
    //         <div className="w-1/2 my-5">
    //           <h1 className="block text-gray-700 text-sm font-bold mb-2">
    //             Category 2 -{" "}
    //             <span className="text-red-400">
    //               Area By Curated Collections
    //             </span>
    //           </h1>
    //           <Select
    //             defaultValue=""
    //             onChange={(value) => setCategory2(value)}
    //             options={[
    //               {
    //                 value: "Affordable condo in Thailand",
    //                 label: "Affordable condo in Thailand",
    //               },
    //               {
    //                 value: "Stay in the bustling Bangkok",
    //                 label: "Stay in the bustling Bangkok",
    //               },
    //               {
    //                 value: "Condo near BTS Thong Lo",
    //                 label: "Condo near BTS Thong Lo",
    //               },
    //               {
    //                 value: "Luxury stay in Bangkok",
    //                 label: "Luxury stay in Bangkok",
    //               },
    //             ]}
    //             size="large"
    //             className="w-full"
    //           />
    //         </div>
    //       </>
    //     </>
    //   ) : (
    //     <>Category Not selected</>
    //   )}

    //   {/* group field */}
    //   <div className="md:grid grid-cols-3 gap-5 my-10">
    //     <ProfileInput
    //       label="Price"
    //       name="price"
    //       // value={price}
    //       // onChange={(e) => setPrice(e.target.value)}
    //     />
    //     <ProfileInput
    //       label="Area"
    //       name="area"
    //       // value={area}
    //       // onChange={(e) => setArea(e.target.value)}
    //     />
    //     <div>
    //       <h1 className="block text-gray-700 text-sm font-bold mb-2">Unit</h1>
    //       <Select
    //         defaultValue=""
    //         onChange={(value) => setunit(value)}
    //         options={[
    //           { value: "1", label: "1" },
    //           { value: "2", label: "2" },
    //           { value: "3", label: "3" },
    //           { value: "4", label: "4" },
    //           { value: "5", label: "5" },
    //           { value: "6", label: "6" },
    //           { value: "7", label: "7" },
    //         ]}
    //         size="large"
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div
      className="bg-white"
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Create Listing
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="propertyTitle"
            size="large"
            label="Property Title"
          />
        </div>
        <div className="mb-[10px]">
          <FormInput
            type="text"
            name="mainImg"
            size="large"
            label="Property thumbnail - ( provide img link)"
          />
        </div>

        <div className="mb-[10px]">
          <FormSelectField
            size="large"
            name="category"
            onChange={(value) => setCategory(value)}
            options={[
              { value: "condos", label: "Buy Condos Near BTS/MRT" },
              { value: "curated", label: "Curated Collections" },
            ]}
            label="Category"
            placeholder="Select"
          />
        </div>
        <div className="mb-[10px]">
          <FormSelectField
            size="large"
            name="propertyType"
            options={[
              { value: "handpicked", label: "Handpicked for you" },
              { value: "videos", label: "Videos & Virtual Tours " },
              { value: "", label: "null" },
            ]}
            label="Type"
            placeholder="Select"
          />
        </div>
        <div className="mb-[10px]">
          <FormSelectField
            size="large"
            name="status"
            options={[
              { value: "verify", label: "verify" },
              { value: "not verify", label: "not verify" },
            ]}
            label="Status"
            placeholder="Select"
          />
        </div>

        {category == "condos" ? (
          <>
            <div className="mb-[10px]">
              <FormSelectField
                size="large"
                name="category2"
                options={[
                  {
                    value: "Condos Near BTS Silom Line",
                    label: "Condos Near BTS Silom Line",
                  },
                  {
                    value: "Condos Near Airport Link",
                    label: "Condos Near Airport Link",
                  },
                  {
                    value: "Condos Near MRT Purple Line",
                    label: "Condos Near MRT Purple Line",
                  },
                  {
                    value: "Condos Near BTS Sukhumvit Line",
                    label: "Condos Near BTS Sukhumvit Line",
                  },
                ]}
                label="Category 2 - Area By condos"
                placeholder="Select"
              />
            </div>
          </>
        ) : category == "curated" ? (
          <>
            <div className="mb-[10px]">
              <FormSelectField
                size="large"
                name="category2"
                options={[
                  {
                    value: "Condos Near BTS Silom Line",
                    label: "Condos Near BTS Silom Line",
                  },
                  {
                    value: "Condos Near Airport Link",
                    label: "Condos Near Airport Link",
                  },
                  {
                    value: "Condos Near MRT Purple Line",
                    label: "Condos Near MRT Purple Line",
                  },
                  {
                    value: "Condos Near BTS Sukhumvit Line",
                    label: "Condos Near BTS Sukhumvit Line",
                  },
                ]}
                label="Category 2 - Area By Curated Collections"
                placeholder="Select"
              />
            </div>
          </>
        ) : (
          <>Category Not selected</>
        )}

        <div className="mb-[10px]">
          <FormInput type="text" name="price" size="large" label="Price" />
        </div>
        <div className="mb-[10px]">
          <FormInput type="text" name="area" size="large" label="Area" />
        </div>

        <div className="mb-[10px]">
          <FormSelectField
            size="large"
            name="unit"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
            ]}
            label="Unit"
            placeholder="Select"
          />
        </div>
        <div className="mb-[10px]">
          <FormtTextarea
            type="text"
            name="description"
            size="large"
            label="Description"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateListingStep;
