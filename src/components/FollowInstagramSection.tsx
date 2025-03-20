
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    likes: 152,
    comments: 23,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    likes: 98,
    comments: 14,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    likes: 207,
    comments: 31,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    likes: 124,
    comments: 18,
  },
];

const FollowInstagramSection = () => {
  return (
    <section id="instagram-section" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Instagram size={24} className="text-white mr-2" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">关注我们的Instagram</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            <Instagram size={18} className="mr-2" />
            在Instagram上关注我们
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowInstagramSection;
