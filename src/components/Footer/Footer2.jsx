import { useState } from "react";
import SmallContainer from "../../shared/SmallContainer";
import TextRed from "../TextRed";
import ShowLinks from "./ShowLinks";
import { Collapse } from "antd";

const firstLinks = [
  {
    label: "DD Property",
    path: "/",
  },
  {
    label: "Ask Guru",
    path: "/",
  },
  {
    label: "Thiland Property News",
    path: "/",
  },
  {
    label: "Property Resources",
    path: "/",
  },
  {
    label: "Property Guide",
    path: "/",
  },
  {
    label: "Condo Directory",
    path: "/",
  },
  {
    label: "Agent Directory",
    path: "/",
  },
  {
    label: "Mortgage Calculator",
    path: "/",
  },
  {
    label: "PropertyGuru Finance",
    path: "/",
  },
];

const Footer2 = () => {
  const [readMore, setReadMore] = useState(false);
  const [showLinks1, setShowLinks1] = useState(4);

  return (
    <div className="p-5 text-justify text-sm bg-dark3">
      <SmallContainer>
        <div>
          <p className="mb-2">
            <TextRed to="/">DDproperty.com</TextRed> is the leading Thailand
            Property website - the best place to start your real estate search
            whether you are an investor, buying for own use, or looking for a
            place to rent. In DDproperty, you can find thousands of properties
            for sale and rent with detailed information about each property,
            including maps and photos.
          </p>

          {readMore && (
            <div className="my-3">
              <p className="mb-2">
                We bring you the most comprehensive selection in the market -
                the most popular condominiums, apartments, serviced apartments,
                houses and commercial property. If you need additional help in
                your housing hunt, you can also consult our preferred real
                estate agents using Ask Guru - or if you a looking for a
                specialized agent, you can{" "}
                <TextRed to="/">search our Agent Directory</TextRed>. If you are
                property owner or agent representing owner, there're many{" "}
                <TextRed to="/">property advertising packages</TextRed> that fit
                your need.
              </p>
              <p>
                Thailand has a dynamic property market and we bring you the most
                complete and up-to-date for sale listings to help you make your
                investment decision. Prospective Property investors should also
                consult our property information resources,{" "}
                <TextRed to="/">Thailand property market news</TextRed> and
                historic transaction prices. More on DDproperty:
              </p>
            </div>
          )}
          <TextRed onClick={() => setReadMore(!readMore)}>
            {!readMore ? "Read More" : "Read Less"}
          </TextRed>
        </div>
        <div className="hidden mt-5 sm:grid grid-cols-4 gap-10">
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
          <ShowLinks
            links={firstLinks}
            currentLength={showLinks1}
            fullLength={firstLinks.length}
            setCurrentLength={setShowLinks1}
          />
        </div>
        <div className="sm:hidden mt-2">
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
          <Collapse
            size="small"
            items={[
              {
                key: "1",
                label: firstLinks[0].label,
                children: (
                  <ShowLinks
                    links={firstLinks}
                    currentLength={showLinks1}
                    fullLength={firstLinks.length}
                    setCurrentLength={setShowLinks1}
                  />
                ),
              },
            ]}
          />
        </div>
      </SmallContainer>
    </div>
  );
};

export default Footer2;
