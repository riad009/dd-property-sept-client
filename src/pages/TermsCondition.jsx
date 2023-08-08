import TextRed from "../components/TextRed";
import SmallContainer from "../shared/SmallContainer";

const TermsCondition = () => {
  return (
    <div className="p-20 text-justify">
      <SmallContainer extraClasses="md:flex gap-5">
        <div className="md:w-4/6">
          <h1 className="text-3xl font-bold">Website Terms And Conditions</h1>
          <p className="my-10 text-xs">
            Welcome to the website DDproperty.com This website is created and
            operated by All Property Media Company Limited registered in
            Thailand. Visitors to this website are bound by the terms and
            conditions of this website. so please read these terms and
            conditions carefully before conducting any transactions on this
            website. and for the purpose In these terms and conditions, the term
            "this website" means DDproperty.com. which may be connected with
            other websites of our network and other third party websites. <br />{" "}
            Please read the terms and conditions for using this website. to be
            thorough before accessing the website You accept these terms and
            conditions before using the website.
          </p>
          <h3>Use Of The Website</h3>
          <p className="text-xs my-5">
            This website may change these terms and conditions from time to
            time. Therefore, visitors to this website You should always read the
            details. To help you always update the terms and conditions of
            service. <br /> In addition, this website contains text, content,
            computer programs, images, video, audio, or graphics. You agree that
            everything displayed on this website protected by copyright and
            other intellectual property owned by the company All Property Media
            with limited access. Do not reproduce, edit and/or share any data,
            content, computer program, image, video, sound, or any other
            graphics without prior authorization. Receive written consent from
            All Property Media Co., Ltd. <br /> Trademarks and logos displayed
            on this website There are both registered and unregistered
            trademarks of those involved. Therefore, the use of such trademarks
            is strictly forbidden. You must admit that Trademark owners can be
            prosecuted for infringement of their intellectual property rights to
            the fullest extent of the law.
            <br />
            <br />
            You agree that you will not use this website. or services of the
            website, taking any action in collecting data, customers or
            advertisers <br />
            <br />
            You agree not to do any of these things, use automated software
            (bots), hack databases, modify or modification Accessing data with
            other software, collecting data or collecting data from All Property
            Media Co., Ltd. services and/or other data and services is strictly
            prohibited. <br />
            <br />
            You agree not to act. use any software To use any part of the
            information and services of All Property Company Limited without
            permission is strictly prohibited.
          </p>
          <h1>About The Information On The Website</h1>
          <div className="text-xs my-5">
            All Property Media Co., Ltd. uses reasonable efforts to collect
            information that is up to date, accurate at all times. However, All
            Property Media Co., Ltd. does not warrant or guarantee its accuracy.
            of information In particular, All Property Media Co., Ltd. will not
            accept or be responsible for any mistake or omission of content on
            this website
          </div>
          <h1>Submission Of Information On The Website</h1>
          <p className="text-xs my-5">
            All types of information that you submit to All Property Media Co.,
            Ltd. will be considered non-confidential information. and is not
            proprietary in any way Everything you send, publish or post
            announcements All Property Media Co., Ltd. or its affiliates. Such
            information can be used unconditionally. You agree that the
            information you post to our website It is not an infringement of
            third party rights. Including copyright, trademark, privacy. or
            other personal property You are solely responsible for all
            information. When you use this website, you agree to allow and/or
            All Property Media Co., Ltd. to collect information about you and
            your use of the website or All Property Media Co., Ltd. Party Media
            Limited has the right to use such information as described in our
            Privacy Policy.
          </p>
          <h1>Links To Other Websites</h1>
          <p className="text-xs my-5">
            This website may contain links to other websites. These links allow
            you to quickly and easily find related websites, services and/or
            products. We have no power to control. Make no representations as to
            the accuracy or reliability of or take any responsibility for the
            content of third party websites or any links contained on third
            party websites. It is your own responsibility to decide whether the
            services and/or products offered through these websites are in line
            with your objectives. of any such websites and All Property Media
            Co., Ltd. is not involved in imposing any warranties or liable for
            damages in connection with the owner. or the operators of any
            website (including damages resulting from any alleged infringement
            All Property Media Co., Ltd. does not allow unauthorized links to be
            placed on this website.{" "}
          </p>
          <h1>DISCLAIMER AND LIMITATION OF LIABILITY</h1>
          <p className="text-xs my-5">
            You must admit that When you use this website You accept the risk
            you are responsible For all expenses incurred (if any) in connection
            with your use of All Property Media Co., Ltd., its directors,
            employees or other agents. shall not be liable for any damages,
            losses, expenses, claims or demands whatsoever, whether direct,
            indirect, compensation or consequential damages arising, in
            connection with the use of the Site. this your or information on the
            content, components or products included on this website. these
            guidelines under the laws of Thailand If there is any dispute will
            be corrected by the Court of Justice
          </p>
          <h1>Changes To Terms And Conditions</h1>
          <p className="text-xs my-5">
            operation of our business Has been continuously developed Therefore,
            our privacy policy, terms and conditions of use, and our advertising
            guidelines May be changed from time to time. We recommend that you
            have constant monitoring. to keep track of whether we have a fix or
            add requirements
          </p>
        </div>
        <div className="flex-1">
          <h1>Curtomer Service Center</h1>
          <div className="flex flex-col gap-5 border p-2 border-dark2/10 rounded-md">
            <TextRed to="/">About DDProperty.com</TextRed>
            <hr />
            <TextRed to="/">Contact Us</TextRed>
            <hr />
            <TextRed to="/">Suggestions/comments</TextRed>
          </div>
        </div>
      </SmallContainer>
    </div>
  );
};

export default TermsCondition;
