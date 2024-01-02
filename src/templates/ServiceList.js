const ServiceList = ({ providers }) => {
    return ( 
        <div className="providers">
            {providers.map(provider => {
               if (provider.visibility) {
                return (<div className="development" key={provider.id}>
                    <img src={`./images/${provider.image}`} alt="#" />
                    <h2>{provider.title}</h2>
                    <p>{provider.description}</p>
                </div>)
               }
            })}
        </div>
     );
}
 
export default ServiceList;