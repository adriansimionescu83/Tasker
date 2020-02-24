import React, {useContext, useState} from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import FeedLayout from './FeedLayout.js';
import Feeds from './Feeds.js';
import AppContext from './AppContext';

const TestimonialsPage = ()=>{
  
    const [state, setState] = useState(
        { feed: [] }
    )

    const [globalState, setGlobalState] = useContext(
        AppContext
    )

    const loadFeed = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json=> {
            setState(   
                {
                    ...state,
                    feed: json.results
                }
            )
        })
    }
    
if(state.feed.length === 0) {
            return (
            <div className="page">
            <h1>
            <Navigation/>
            <Banner/>
            </h1>
            <p>
                <button onClick={loadFeed}>Load Testimonials</button>
            </p>
            </div>
            )
             } else {
                return (
                    <div className="page">
                    <h1>
                    <Navigation/>
                    <Banner/>
                    </h1>
                    <p>
                    <FeedLayout>
                    {
                        state.feed.map(
                            (item)=>
                            <Feeds 
                                title={item.title}
                                description={item.body}
                                buttonLabel="View Post"
                            />
                        )
                    }
                    </FeedLayout>  
                    </p>
                    </div>  
            )
        }
}
export default TestimonialsPage;