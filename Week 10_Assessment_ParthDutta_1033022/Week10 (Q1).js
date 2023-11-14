import './Page.css'
function Page() {
    return (
        <div className="screen1" >
            <div className="react">
                <img src="./images/react.png" alt="React" />
            </div>
            <div className="font">
                <p className="fontline"><b>LOADING</b></p>
                <p className="fontline"><b>SCREEN</b></p>
                <p className="fontline"><b>REACTJS</b></p>
            </div>
            <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
}
export default Page;