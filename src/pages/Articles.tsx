import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Understanding Carbon Credits: A Comprehensive Guide',
    excerpt: 'Learn about the basics of carbon credits, how they work, and their impact on climate change mitigation efforts.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title: 'The Role of Carbon Credits in Corporate Sustainability',
    excerpt: 'Explore how businesses are using carbon credits to achieve their sustainability goals and reduce their environmental impact.',
    imageUrl: 'https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    title: 'Carbon Credit Projects: From Reforestation to Renewable Energy',
    excerpt: 'Discover the various types of projects that generate carbon credits and their benefits to local communities and ecosystems.',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const Articles: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Articles</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.excerpt}</p>
              <button className="mt-4 text-green-600 hover:text-green-800 font-medium">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;