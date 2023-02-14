export default function Map(options) {
    return (
        <div>
            <div className="map">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab assumenda quaerat, modi blanditiis saepe! Odit accusamus harum quisquam numquam,
                 ducimus aliquid architecto pariatur necessitatibus delectus deserunt magnam culpa mollitia?
                 <div className="google">
                    <span className="text-primary">G</span>
                    <span className="text-danger">o</span>
                    <span className="text-warning">o</span>
                    <span className="text-primary">g</span>
                    <span className="text-success">l</span>
                    <span className="text-danger">e</span>
                 </div>
            </div>
            <div className="offcanvas offcanvas-end map" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </div>
    )
}