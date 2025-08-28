type Props = { result: any | null };

export default function ResultCard({ result }: Props) {
  if (!result) return null;

  return (
     <div className="mt-6 p-4 border rounded bg-gray-50 w-full max-w-md shadow">
      <h2 className="text-lg font-semibold mb-2">🍲 Upload Result</h2>
      <p><strong>File:</strong> {result.file}</p>
      <p><strong>Calories (fake):</strong> {result.calories} kcal</p>
      <p>{result.message}</p>
    </div>
  );
}
 

  
    