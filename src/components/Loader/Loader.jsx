import { ThreeDots } from 'react-loader-spinner'

import css from './Loader.module.css'

const Loader = () => {
    return (
        <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass={css.loader}
            visible={true}
         />
    )
}

export default Loader;
