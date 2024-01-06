const Copyright = () => {
    const date = new Date();

    const copyright = `© Abolarin Nathaniel Okikiola ${date.getFullYear()}`;

    return ( 
        <div className="copyright">{ copyright }</div>
     );
}
 
export default Copyright;