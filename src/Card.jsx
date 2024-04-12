import sandwichPic from './assets/sandwich.jpeg'

function Card() {
    return(
        <>
            <div className="card col-md-3 col-sm-4 col-xs-6">
                <img className='card-image' src={sandwichPic} alt="Item Picture"></img>
                <h3>Sandwich</h3>
                <p>This Is A Sandwich</p>
            </div>
        </>
    );

}

export default Card