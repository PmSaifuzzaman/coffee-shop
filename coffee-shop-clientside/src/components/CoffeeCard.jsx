import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, category, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl p-8">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full">
                <div className='pl-2 space-y-4'>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Supplier: {supplier}</p>
                    <p>Catagory: {category}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="btn-group btn-group-vertical gap-5">
                    <button className="btn ">Details</button>
                    <button className="btn">Update</button>
                    <button className="btn">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
}