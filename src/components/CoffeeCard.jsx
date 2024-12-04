const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, details, photo, category } = coffee;
  return (
    <div className="hero bg-base-200 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl font-bold">{name}!</h1>
          <div>
            <p className="py-2">{details}</p>
            <p className="py-2">Supplier: {supplier}</p>
            <p className="py-2">Taste: {taste}</p>
            <p className="py-2">Quantity: {quantity}</p>
            <p className="py-2">Category: {category}</p>
          </div>
        </div>
        <div className="join join-vertical">
          <button className="btn join-item bg-yellow-950 text-white">View</button>
          <button className="btn join-item bg-yellow-950 text-white">Edit</button>
          <button className="btn join-item bg-yellow-950 text-white">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
