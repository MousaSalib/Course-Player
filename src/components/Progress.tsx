type Props = {
  progress: number;
};

export default function Progress({ progress }: Props) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full space-y-4">
      <h2 className="text-xl font-semibold text-center">📈 Progress Rate</h2>
      <div className="relative">
        <div className="h-4 w-full bg-gray-200 rounded-full">
          <div
            className="h-4 bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${Math.floor(progress)}%` }}
          />
        </div>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white">
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
}
