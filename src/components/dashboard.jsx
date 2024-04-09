import './style.css'

function Dashboard() {
  return (
    <div className="container">
        <div className="card">
          <div className='left'>
            <span className='bill'>Bill</span>
              <div className="price_placeholder">
                <span className='dollar'>$</span>
                <span className='value'>0</span>
              </div>
              <div className='select_text'>
                <p>Select Tip %</p>
              </div>
              <div className='tip_container'>
                <div className='tip_row'>
                  <div className='tip_box'>5%</div>
                  <div className='tip_box'>10%</div>
                  <div className='tip_box'>15%</div>
                
                  <div className='tip_box'>25%</div>
                  <div className='tip_box'>50%</div>
                  <div className='tip_box_custom'>Custom</div>
                </div>
              </div>

              <p className='people'>Number of People</p>
              <div className="price_placeholder">
                <span className='dollar'>$</span>
                <span className='value'>0</span>
              </div>
          </div>
          
            
        <div className='green_card'>
            <div className='amount_row'>
              <h6>Tip Amount <br/> <span style={{ color: 'rgb(157, 197, 197)'}}>/ person</span></h6>
              <p>$0.00</p>
            </div>
            
            <div className='amount_row'>
              <h6>Total <br/> <span className='person'>/ person</span></h6>
              <p>$0.00</p>
            </div>
            <button className='btn'>RESET</button>

        </div>
        </div>
    </div>
  )
}

export default Dashboard