// types/PortfolioItemProps.ts
export interface PortfolioItemProps {
  image: string; // URL to the image
  title: string; // Title of the portfolio item
  description: string; // Description of the portfolio item
}

// components/PortfolioItem.js
export default function PortfolioItem({
  image,
  title,
  description,
}: PortfolioItemProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={image} alt={title} className="rounded-t-lg w-full" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
