import Todos from '../Todos'
import Additem from '../Additem';

function Homepage() {
    return (
        <div>
            <Additem />
            <Todos />
        </div>
    );
}

export default Homepage;