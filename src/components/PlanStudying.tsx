import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { ReactElement } from "react";
import PdfPopup from "../popups/PdfPopup";
import ExamPopup from "../popups/ExamPopup";

type PlanProps = {
  title: string;
  subTitle: string;
  desc: string;
  iconOne: ReactElement;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  iconTwo: ReactElement;
  questionsNum: number;
  minutesNum: number;
};

const plan: PlanProps[] = [
  {
    title: "Week 1-4",
    subTitle: "Advanced story telling techniques for writers: ",
    desc: "Persons, Characters & Plots",
    iconOne: <FaFileAlt />,
    item1: "Introduction",
    item2: "Course Overview",
    item3: "Course Overview",
    item4: "Course Exercise / Reference Files",
    item5: "Code Editor Installation",
    item6: "Embedding PHP in HTML",
    iconTwo: <TbLock />,
    questionsNum: 1,
    minutesNum: 5,
  },
  {
    title: "Week 5-8",
    subTitle: "Advanced story telling techniques for writers: ",
    desc: "Persons, Characters & Plots",
    iconOne: <FaFileAlt />,
    item1: "Introduction",
    item2: "Course Overview",
    item3: "Course Overview",
    item4: "Course Exercise / Reference Files",
    item5: "Code Editor Installation",
    item6: "Embedding PHP in HTML",
    iconTwo: <TbLock />,
    questionsNum: 2,
    minutesNum: 10,
  },
  {
    title: "Week 9-12",
    subTitle: "Advanced story telling techniques for writers: ",
    desc: "Persons, Characters & Plots",
    iconOne: <FaFileAlt />,
    item1: "Introduction",
    item2: "Course Overview",
    item3: "Course Overview",
    item4: "Course Exercise / Reference Files",
    item5: "Code Editor Installation",
    item6: "Embedding PHP in HTML",
    iconTwo: <TbLock />,
    questionsNum: 3,
    minutesNum: 15,
  },
];

export default function PlanStudying() {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [showExamPopup, setShowExamPopup] = useState(false);

  const handlePdfOpen = () => {
    setShowPdfPopup(true);
  };

  const handleExamOpen = () => {
    setShowExamPopup(true);
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      {plan.map((item, index) => (
        <div key={index} className="border p-4 rounded space-y-2">
          <h2 className="text-xl font-bold">{item.title}</h2>
          <h3 className="text-gray-600">{item.subTitle}</h3>
          <p className="text-gray-600">{item.desc}</p>
          <hr className="my-2" />
          {[
            item.item1,
            item.item2,
            item.item3,
            item.item4,
            item.item5,
            item.item6,
          ].map((listItem, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-gray-800 border-b py-1"
            >
              <div className="flex items-center gap-2">
                <span>{item.iconOne}</span>
                <span>{listItem}</span>
              </div>

              {i === 1 ? (
                <button
                  onClick={handlePdfOpen}
                  className="border border-blue-600 text-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
                >
                  Open PDF
                </button>
              ) : i === 5 ? (
                <button
                  onClick={handleExamOpen}
                  className="border border-yellow-500 text-yellow-500 px-4 py-2 text-sm rounded hover:bg-yellow-500 hover:text-white cursor-pointer transition-colors duration-300 ease-in-out"
                >
                  Start Exam
                </button>
              ) : (
                <span>{item.iconTwo}</span>
              )}
            </div>
          ))}
        </div>
      ))}
      <PdfPopup show={showPdfPopup} onClose={() => setShowPdfPopup(false)} />
      <ExamPopup show={showExamPopup} onClose={() => setShowExamPopup(false)} />
    </div>
  );
}
