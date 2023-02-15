import map from '../../assets/images/map.png'

export default function Map(options) {
    return (
        <div>
            <div className="map">
                <div id='mapimg' style={{ backgroundImage: `url(${map})` }} ></div>
                {/* <img id='mapimg' src={map} alt="" /> */}
                <div className="google">
                    <span className="text-primary">G</span>
                    <span className="text-danger">o</span>
                    <span className="text-warning">o</span>
                    <span className="text-primary">g</span>
                    <span className="text-success">l</span>
                    <span className="text-danger">e</span>
                 </div>
            </div>
            {/* <div className="offcanvas offcanvas-end map" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div> */}
        </div>
    )
}