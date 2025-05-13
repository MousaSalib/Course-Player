import { GiDuration } from "react-icons/gi";
import { MdPlayLesson, MdLanguage } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { ReactElement } from "react";

type MaterialItem = {
  Icon: ReactElement;
  title: string;
  text: string;
};

const items: MaterialItem[] = [
  { Icon: <GiDuration />, title: "Duration", text: "3 weeks" },
  { Icon: <MdPlayLesson />, title: "Lessons", text: "8 lessons" },
  { Icon: <PiStudentBold />, title: "Enrolled", text: "65 students" },
  { Icon: <MdLanguage />, title: "Language", text: "English" },
  { Icon: <GiDuration />, title: "Duration", text: "3 weeks" },
  { Icon: <MdPlayLesson />, title: "Lessons", text: "8 lessons" },
  { Icon: <PiStudentBold />, title: "Enrolled", text: "65 students" },
  { Icon: <MdLanguage />, title: "Language", text: "English" },
];

export default function CourseMaterials() {
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Course Materials</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="grid grid-cols-2 gap-6">
          {[col1, col2].map((column, i) => (
            <div key={i} className="flex flex-col divide-y divide-gray-200">
              {column.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center gap-2 text-gray-700 text-lg">
                    <span>{item.Icon}</span>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <div className="text-gray-800 font-medium">{item.text}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
