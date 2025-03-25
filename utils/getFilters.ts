export default function getFilters(searchParams: URLSearchParams) {
    const params = searchParams;
    const minPrice = params.get('minPrice');
    const maxPrice = params.get('maxPrice');
    const rating = params.get('rating');
    const language = params.get('language');
    const sort = params.get('sort');
    const availability = params.get('availability');
    const category = params.get('category');
    return { minPrice, maxPrice, rating, language, sort, availability, category };
};