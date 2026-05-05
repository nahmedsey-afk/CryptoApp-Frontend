import { articles } from "../data/cryptos";
import Card from "../components/common/Card";

function Learn() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Learn about crypto
      </h1>
      <p className="text-gray-500 mb-8">
        Expand your knowledge and earn crypto rewards
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="cursor-pointer">
            <div className="text-4xl mb-4">{article.emoji}</div>
            <h2 className="font-bold text-gray-900 text-lg mb-2">
              {article.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{article.description}</p>
            <span className="text-blue-600 text-sm font-medium">
              {article.time}
            </span>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Learn;
