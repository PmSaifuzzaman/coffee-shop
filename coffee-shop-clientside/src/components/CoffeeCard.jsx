import { data } from 'autoprefixer';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, category, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    if(data.deleteCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }

            }
        })
    }

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
                    <button onClick={() => handleDelete(_id)} className="btn">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
}