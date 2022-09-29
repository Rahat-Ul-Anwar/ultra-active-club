 
import './Break.css';

const Break = (props) => {
    console.log(props)


return (
        <div className='break'>
            <h5>Add  A Break</h5>
            <div className="break-btn">
                  
            <button onClick={()=>props.handleAddButton(10)}>10s</button>
            <button onClick={()=>props.handleAddButton(20)}>20s</button>
            <button onClick={()=>props.handleAddButton(30)}>30s</button>
            <button onClick={()=>props.handleAddButton(40)}>40s</button>
           
          </div>
            
        </div>
    );
};

export default Break;