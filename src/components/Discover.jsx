import './Discover.css';
import DATA from './MOCK_DATA.json'

const Discover = () => {
    return (
        <div className="discover">
            <h2>Discover a Tiger</h2>
            <div className="tigers">
                { DATA.map(
                    (data, key) => {
                        return (
                            <div key={key} className="tiger"> <img src={data.download_url} alt="" /> </div>
                        )
                    }

                )
               
            }
            </div>
        </div>
    )
}

export default Discover;