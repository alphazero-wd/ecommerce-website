const pages = [];
const stars = [];
export const paginate = () => {
  for (let i = 1; i <= 8; i++) {
    pages.push(i);
  }
  return pages;
};
export const getStars = () => {
  for (let i = 1; i <= 5; i++) {
    stars.push(i);
  }
  return stars;
};
