
import { Spinner }
    from 'react-spinner-animated'

import 'react-spinner-animated/dist/index.css'


function Loadding() {
    return (
        <Spinner text={"Loading..."} bgColor={"#FFFFFF"}
            center={true} width={"150px"} height={"150px"} />
    )
}
export default Loadding;