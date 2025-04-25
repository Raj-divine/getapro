'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Slider } from '@/components/ui/slider';
import getFilters from '@/utils/getFilters';
import { BarChart3, Calendar, FileText, Scale, Users, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Categories with icons
const categories = [
  { name: 'Lawyers', icon: <Scale className='h-4 w-4' /> },
  { name: 'Charted Accountants', icon: <BarChart3 className='h-4 w-4' /> },
  { name: 'Company Secretaries', icon: <FileText className='h-4 w-4' /> },
  { name: 'Cost Management Accountants', icon: <Users className='h-4 w-4' /> },
];

// Additional filters
const ratingFilters = ['Any', '4.5+', '4.0+', '3.5+'];
const languageFilters = ['Any', 'English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Punjabi', 'Marathi', 'Gujarati', 'Bengali', 'Assamese', 'Odia', 'Urdu', 'Sanskrit', 'Manipuri', 'Maithili', 'Bodo', 'Dogri', 'Konkani', 'Nepali', 'Santhali', 'Sindhi'];
const sortOptions = [
  { value: 'rating-desc', label: 'Highest Rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'reviews-desc', label: 'Most Reviews' },
];

export default function AppSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { minPrice, maxPrice, rating, language, sort, availability, category } = getFilters(searchParams);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);
  const [priceRange, setPriceRange] = useState([Number(minPrice) || 0, Number(maxPrice) || 10000]);
  const [availabilityFilter, setAvailabilityFilter] = useState<string | null>(availability || null);
  const [ratingFilter, setRatingFilter] = useState(rating || 'Any');
  const [languageFilter, setLanguageFilter] = useState(language || 'Any');
  const [sortOption, setSortOption] = useState(sort || 'rating-desc');

  const constructFilterParams = () => {
    const params = new URLSearchParams();

    if (selectedCategory) {
      params.set('category', selectedCategory);
    }

    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());

    if (availabilityFilter) {
      params.set('availability', availabilityFilter);
    }

    params.set('rating', ratingFilter);

    if (languageFilter !== 'Any') {
      params.set('language', languageFilter);
    }
    params.set('sort', sortOption);
    return params;
  };

  useEffect(() => {
    const params = constructFilterParams();
    router.push(`?${params.toString()}`);
  }, [selectedCategory, priceRange, availabilityFilter, ratingFilter, languageFilter, sortOption]);

  return (
    <Sidebar>
      <SidebarHeader className='h-16 border-b'>
        <div className='relative w-1/4 h-full'>
          <Link href='/'>
            <Image
              alt='Logo'
              objectFit=''
              fill
              priority
              src='/assets/svgs/logo.svg'
            />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setSelectedCategory(null)}
                  isActive={selectedCategory === null}
                >
                  <Users />
                  <span>All Professionals</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton
                    onClick={() => setSelectedCategory(category.name)}
                    isActive={selectedCategory === category.name}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Sort By</SidebarGroupLabel>
          <SidebarGroupContent className='px-4'>
            <RadioGroup value={sortOption} onValueChange={setSortOption}>
              {sortOptions.map((option) => (
                <div
                  key={option.value}
                  className='flex items-center space-x-2 py-1'
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Price Range/Hour</SidebarGroupLabel>
          <SidebarGroupContent className='px-4'>
            <div className='space-y-4'>
              <Slider
                defaultValue={[0, 10000]}
                max={10000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
              />
              <div className='flex items-center justify-between'>
                <span className='text-sm'>₹{priceRange[0]}</span>
                <span className='text-sm'>₹{priceRange[1]}+</span>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Availability</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setAvailabilityFilter(null)}
                  isActive={availabilityFilter === null}
                >
                  <Calendar />
                  <span>Any time</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setAvailabilityFilter('today')}
                  isActive={availabilityFilter === 'today'}
                >
                  <Calendar />
                  <span>Available today</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setAvailabilityFilter('tomorrow')}
                  isActive={availabilityFilter === 'tomorrow'}
                >
                  <Calendar />
                  <span>Available tomorrow</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Minimum Rating</SidebarGroupLabel>
          <SidebarGroupContent className='px-4'>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select rating' />
              </SelectTrigger>
              <SelectContent>
                {ratingFilters.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Language</SidebarGroupLabel>
          <SidebarGroupContent className='px-4'>
            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select language' />
              </SelectTrigger>
              <SelectContent>
                {languageFilters.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='border border-t'>
        <Button
          className='font-medium flex justify-center items-center w-full'
          variant='outline'
        >
          <span className='w-1/2 flex items-center justify-between'>
            <X size={18} /> Clear Filters
          </span>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
