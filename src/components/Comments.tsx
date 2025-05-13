import Image from "next/image";

type AllComments = {
  image: string;
  name: string;
  date: string;
  content: string;
};

const allComments: AllComments[] = [
  {
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Gohn Amged Gorge",
    date: "June 5, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore nesciunt incidunt libero beatae in reprehenderit deleniti sed magni autem neque repellat id eveniet, dolor nostrum minima, obcaecati corrupti inventore?",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Lina Hana Hana",
    date: "March 3, 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore nesciunt incidunt libero beatae in reprehenderit deleniti sed magni autem neque repellat id eveniet, dolor nostrum minima, obcaecati corrupti inventore?",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mark Hana Anton",
    date: "April 4, 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolore nesciunt incidunt libero beatae in reprehenderit deleniti sed magni autem neque repellat id eveniet, dolor nostrum minima, obcaecati corrupti inventore?",
  },
];

export default function Comments() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Comments</h2>
      {allComments.map((comment, index) => (
        <div key={index} className="flex items-start gap-4 border-b pb-4">
          <div className="w-14 h-14 relative flex-shrink-0">
            <Image
              src={comment.image}
              alt={comment.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800">{comment.name}</div>
            <div className="text-sm text-gray-500">{comment.date}</div>
            <p className="mt-1 text-gray-700">{comment.content}</p>
          </div>
        </div>
      ))}
      <div>
        <textarea
          className="w-full p-4 rounded-lg bg-white shadow-2xl  focus:outline-none focus:ring-2 mb-2"
          placeholder="Write a comment..."
          rows={3}
        />
        <button className=" bg-green-700 p-2 rounded text-white cursor-pointer">
          Submit Preview →
        </button>
      </div>
    </>
  );
}
