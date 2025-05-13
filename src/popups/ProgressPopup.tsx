type Props = {
  show: boolean;
  onClose: () => void;
  progress: number;
};

export default function ProgressPopup({ show, onClose, progress }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md text-center w-80">
        <h2 className="text-xl font-semibold mb-4">📈 Progress Rate</h2>
        <div className="relative mb-4">
          <div className="h-2 w-full bg-gray-300 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full"
              style={{ width: `${Math.floor(progress)}%` }}
            />
          </div>
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-lg font-bold text-green-600 mt-3">
            {Math.floor(progress)}%
          </span>
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
