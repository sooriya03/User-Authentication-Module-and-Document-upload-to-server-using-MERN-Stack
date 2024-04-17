import React from 'react'
import { Link } from "react-router-dom";
function Home() {
    return(
        <><div>
            <p>This is the Logical Inference Deductive System, a sophisticated framework meticulously crafted to revolutionize deductive reasoning processes and deliver impeccable logical conclusions to users. The primary objective of this paper is to introduce a comprehensive solution that leverages advanced computational libraries, specifically LogiTorch, to train a cutting-edge logical reasoning transformer model. Complementing this, the deployment of Hugging Face is employed to facilitate a question generation model, collectively refining the deductive reasoning process.</p>
        </div><div>
                <Link to ="/upload" className="btn btn-success w-10 rounded-0"> New Case</Link>
            </div></>
    )
}

export default Home