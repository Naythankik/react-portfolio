const PackagesList = ({ images }) => {

    return ( 
        images.map((image, index) => (
            <div className="tool" key={index + 1}>
              <img src={ `./images/${image}.svg` } alt="#" /> <span>{ image.toUpperCase() }</span>
    
            </div>
            ))
     );
     
}
 
export default PackagesList;