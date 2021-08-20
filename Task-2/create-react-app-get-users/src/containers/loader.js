import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="Circles"
            color="black"
            height={50}
            width={100}
            timeout={2500}
            />
        </div>
    );
}
export default LoaderComp