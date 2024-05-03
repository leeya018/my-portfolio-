// components/Statistics.js
export default function Statistics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center p-4">
      <div>
        <p className="text-3xl font-semibold">320</p>
        <p>Happy Customers</p>
      </div>
      <div>
        <p className="text-3xl font-semibold">52</p>
        <p>Projects</p>
      </div>
      <div>
        <p className="text-3xl font-semibold">89%</p>
        <p>Customer Satisfaction</p>
      </div>
      <div>
        <p className="text-3xl font-semibold">9.2M</p>
        <p>Users Reached</p>
      </div>
    </div>
  );
}
