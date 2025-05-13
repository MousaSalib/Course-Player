type Props = {
  show: boolean;
  onClose: () => void;
};

export default function LeaderboardPopup({ show, onClose }: Props) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md text-center w-96">
        <h2 className="text-xl font-semibold mb-4">🏆 Leaderboard</h2>
        <p className="text-gray-700 mb-4">
          Here the leaderboard or student results will be displayed
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
