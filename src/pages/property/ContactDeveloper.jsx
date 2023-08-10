import { Checkbox, Input } from "antd";
import React from "react";
import TextRed from "../../components/TextRed";
import Button from "../../components/Button";
import { Content } from "./StickySection";

const ContactDeveloper = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold">Contact Developer</h1>
      <div className="sm:flex gap-5 mt-5 bg-dark/5 p-5 sm:p-10 rounded-lg text-xs">
        <div className="flex-1 text-justify">
          <h6>How can the developer reach you?</h6>
          <div className="flex items-center gap-2 mt-2">
            <label className="w-10">Name</label> <Input placeholder="Name" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <label className="w-10">Mobile</label>{" "}
            <Input addonBefore="+66" type="number" placeholder="Mobile" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <label className="w-10">Email</label>{" "}
            <Input type="email" placeholder="Email" />
          </div>

          <div className="sm:px-10 py-3">
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
          </div>
        </div>
        <div className="flex-0">
          <Content handleContactAbout={() => {}} />
        </div>
      </div>
      <div className="text-center text-xs my-2">
        Legal Disclaimer: The advertiser assumes all responsibility for the
        advertisement details
      </div>
    </div>
  );
};

export default ContactDeveloper;
