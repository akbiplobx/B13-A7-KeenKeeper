import { Plus } from 'lucide-react';

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[#f9fafb]">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e35] mb-4">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-gray-500 text-lg leading-relaxed mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the 
        relationships that matter most.
      </p>

      {/* Action Button */}
      <button className="flex items-center gap-2 bg-[#2d4f3e] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#233f32] transition-all">
        <Plus size={20} />
        <span>Add a Friend</span>
      </button>
    </section>
  );
};

export default Banner;