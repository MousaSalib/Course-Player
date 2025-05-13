type Props = {
  show: boolean;
  onClose: () => void;
};

export default function QuestionPopup({ show, onClose }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">❓ Ask a Question</h2>
        <p className="text-gray-700 mb-4">
          {"What's your question about the course?"}
        </p>
        <input
          type="text"
          placeholder="Type your question here..."
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
