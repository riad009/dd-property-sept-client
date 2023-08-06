import { Collapse } from "antd";
import { Link } from "react-router-dom";
import TextRed from "../../components/TextRed";

const FAQ = () => {
  const forSale = [
    "At Eco Resort Bang Saray Sattahip : อีโค รีสอร์ท บางเสร่ สัตหีบ",
    "In Bang Sa-re",
    "In Sattahip",
    "Under 10K บาท",
    "80 – 150 ตารางเมตร",
  ];

  return (
    <div>
      <div className="p-10 flex items-center">
        <h1 className="w-1/3 font-bold text-2xl">Frequently Asked Questions</h1>
        <Collapse
          items={[
            {
              key: 1,
              label:
                "What is the address of Eco Resort Bang Saray Sattahip : อีโค รีสอร์ท บางเสร่ สัตหีบ, Chon Buri?",
              children:
                "Eco Resort Bang Saray Sattahip : อีโค รีสอร์ท บางเสร่ สัตหีบ, Chon Buri is located at 222 หมู่2, Bang Sa-re, Sattahip, Chon Buri 20250 Sattahip (TH2009).",
            },
          ]}
        />
      </div>
      <div className="p-10">
        <h1 className="font-semibold text-xl">
          Explore Other Options In And Around Bang Sa-Re Based on the property
        </h1>
        <p className="my-2 text-sm">
          criteria, you might be interested on the following:{" "}
        </p>
        <h1 className="text-sm">
          Condo For Sale: {""}
          {forSale.map((sale) => (
            <TextRed extraClasses="underline" to="/">
              {sale} {" | "}
            </TextRed>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default FAQ;
