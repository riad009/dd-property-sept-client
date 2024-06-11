import { Checkbox, Input } from "antd";
import React from "react";
import TextRed from "../../components/TextRed";
import Button from "../../components/Button";
import { Content } from "./StickySection";

const ContactDeveloper = ({ property }) => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">Contact Property Owner</h1>
      <div className=" gap-5 mt-5 bg-dark/5 p-5 sm:p-10 rounded-lg text-base">
        <div className="flex flex-col">
          <div className="flex gap-4 mt-2">
            <label className="w-auto">Name:</label>
            <p className="font-semibold">{property?.contactName}</p>
          </div>
          <div className="flex gap-4 mt-2">
            <label className="w-auto">Email:</label>
            <p className="font-semibold">{property?.contactEmail}</p>
          </div>
          <div className="flex gap-4 mt-2">
            <label className="w-auto">Mobile number:</label>
            <p className="font-semibold">{property?.contactNumber}</p>
          </div>
          <div className="flex gap-4 mt-2">
            <label className="w-auto">Address:</label>
            <p className="font-semibold">{property?.contactAddress}</p>
          </div>

          {/* <div className="sm:px-10 py-3">
            <Checkbox className="text-xs">
              I accept AllProperty Media Co Ltd’s ('APM'){" "}
              <TextRed>Privacy Policy</TextRed> and your collection, use and
              disclosure of my personal data.
            </Checkbox>
            <Checkbox className="text-xs my-3">
              Send me direct marketing from APM according to{" "}
              <TextRed>Privacy Policy</TextRed>
            </Checkbox>
            <p>
              By clicking "SUBMIT", I accept APMs{" "}
              <TextRed>Terms of Use</TextRed> and agree for my personal data to
              be passed to the Developer, Agent and/or any authorised service
              provider to contact me about my enquiry.
            </p>
            <Button type="submit" extraClasses="bg-danger text-white mt-5">
              Submit
            </Button>
          </div> */}
        </div>
        {/* <div className="flex-0">
          <Content handleContactAbout={() => {}} />
        </div> */}
      </div>
      <div className="text-center text-xs my-2">
        Legal Disclaimer: The advertiser assumes all responsibility for the
        advertisement details
      </div>
    </div>
  );
};

export default ContactDeveloper;
