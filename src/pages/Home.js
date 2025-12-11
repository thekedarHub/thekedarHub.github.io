import React, { useState, useEffect } from 'react';
import ProjectPost from '../components/ProjectPost';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - replace with API call
  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        title: "Modern Kitchen Renovation",
        description: "Complete kitchen makeover with modern appliances and granite countertops",
        contractor: { name: "Rajesh Kumar", rating: 4.8 },
        date: "2 days ago",
        hashtags: ["kitchen", "renovation", "modern", "granite"],
        media: [
          { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400", alt: "Kitchen 1" },
          { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400", alt: "Kitchen 2" },
          { url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400", alt: "Kitchen 3" }
        ],
        upvotes: 24,
        downvotes: 2
      },
      {
        id: 2,
        title: "Bathroom Tile Work",
        description: "Premium ceramic tile installation with waterproofing",
        contractor: { name: "Amit Singh", rating: 4.6 },
        date: "1 week ago",
        hashtags: ["bathroom", "tiles", "waterproofing", "ceramic"],
        media: [
          { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400", alt: "Bathroom 1" },
          { url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400", alt: "Bathroom 2" }
        ],
        upvotes: 18,
        downvotes: 1
      },
      {
        id: 3,
        title: "Living Room Interior Design",
        description: "Contemporary living room design with custom furniture",
        contractor: { name: "Priya Sharma", rating: 4.9 },
        date: "3 days ago",
        hashtags: ["interior", "livingroom", "contemporary", "furniture"],
        media: [
          { url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400", alt: "Living room 1" }
        ],
        upvotes: 31,
        downvotes: 0
      }
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #f3f3f3',
          borderTop: '4px solid var(--color-primary)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto'
        }}></div>
        <p style={{ marginTop: '16px', color: '#6c757d' }}>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '20px' }}>
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '700',
          color: 'var(--color-primary)',
          marginBottom: '8px'
        }}>
          Thekedar Hub
        </h1>
        <p style={{ color: 'var(--color-text)', fontSize: '14px' }}>
          Discover amazing projects in your area
        </p>
      </header>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {posts.map(post => (
          <ProjectPost key={post.id} post={post} />
        ))}
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;