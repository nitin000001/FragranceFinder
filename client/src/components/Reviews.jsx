import React from "react";

const reviews = [
  {
    id: 1,
    name: "Riya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "Absolutely love the Elegant Blossom! The scent is long-lasting and very refreshing.",
  },
  {
    id: 2,
    name: "Aarav Mehta",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 4,
    comment: "Mystic Oud has such a deep and rich fragrance. Feels premium!",
  },
  {
    id: 3,
    name: "Ananya Singh",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    comment: "Fresh Citrus is perfect for daily use. So light and energetic!",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600">Real reviews from our lovely perfume lovers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-pink-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <div className="flex text-yellow-400 mt-1">
                  {Array(review.rating).fill(0).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array(5 - review.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-gray-300">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
