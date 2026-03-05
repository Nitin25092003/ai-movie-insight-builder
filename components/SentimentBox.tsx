export default function SentimentBox({ sentiment }) {

  return (

    <div className="bg-blue-50 mt-6 p-6 rounded">

      <h3 className="text-xl font-semibold">

        AI Audience Insight

      </h3>

      <p className="mt-2">

        {sentiment.summary}

      </p>

      <span className="mt-3 inline-block bg-blue-200 px-3 py-1 rounded">

        {sentiment.classification}

      </span>

    </div>

  );
}