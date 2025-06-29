import { Scale } from 'lucide-react';
import { ReactNode } from 'react';

interface CategoryCardProps {
  title: string;
  numberOfProfessionals: number;
  children: ReactNode;
}
function CategoryCard({
  title,
  numberOfProfessionals,
  children,
}: CategoryCardProps) {
  return (
    <div className='border border-violet-200 bg-white rounded flex flex-col items-center justify-center aspect-square h-40 cursor-pointer transition-transform hover:-translate-y-2 w-full'>
      <div>{children}</div>
      <p className='font-medium text-lg'>{title}</p>
      <p className='text-gray-500'>{numberOfProfessionals} Professionals</p>
    </div>
  );
}

export default function CategorySection() {
  const categoryData = [
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
    {
      title: 'Corporate Law',
      numberOfProfessionals: 10,
      icon: <Scale />,
    },
  ];

  return (
    <section className='bg-violet-100 py-24 px-7 xs:px-16 md:px-10 lg:px-10 xl:px-16'>
      <h3 className='font-heading text-3xl md:text-5xl font-bold text-center'>
        Browse by category
      </h3>
      <div className='grid grid-cols-2 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 gap-4 place-items-center mt-10 xl:grid xl:grid-cols-8'>
        {categoryData.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            numberOfProfessionals={category.numberOfProfessionals}
          >
            {category.icon}
          </CategoryCard>
        ))}
      </div>
    </section>
  );
}
