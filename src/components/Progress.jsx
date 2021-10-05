import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Progress.css';
import tiger from '../assets/tiger.png'

const Progress = ()=> {

    const percentage = 66;

    return (
        <div className="Progress">

        <div className="progressGrid">

            <div className="progressDetails">

              <img src={tiger} alt="" />
                <div className="tigerDetails">
                    <div className="tigerId">
                        <h6>TIger #777</h6>
                        <p>12</p>
                    </div>

                <CircularProgressbar value={percentage} text={`${percentage}%`} className="progressBar"/>
                </div>

            </div>


            <div className="progressDetails">

                <img src={tiger} alt="" />
                <div className="tigerDetails">
                    <div className="tigerId">
                        <h6>TIger #777</h6>
                        <p>12</p>
                    </div>

                    <CircularProgressbar value={percentage} text={`${percentage}%`} className="progressBar"/>
                    </div>


                    
                </div>


                <div className="progressDetails">

                    <img src={tiger} alt="" />
                    <div className="tigerDetails">
                        <div className="tigerId">
                            <h6>TIger #777</h6>
                            <p>12</p>
                        </div>

                        <CircularProgressbar value={percentage} text={`${percentage}%`} className="progressBar"/>
                        </div>


    
                    </div>

        </div>

                   

        </div>
    )
}

export default Progress;