import bgVideo from '../assets/4K_02.mp4' ;
import vs from '../assets/player.gif';
function Home() {
    return (
      <div className="home-main">
        <video src={bgVideo} loop autoPlay muted />
        <img src={vs}  />
        <section>
         <article>
           <h3>Player One</h3>
           <ol>
            <li><a href="">Power: 200</a></li>
            <li><a href="">Life: 5</a></li>
            <li><a href=''> Speed: 300</a></li>
           </ol>
         </article>  
         <article>
           <h3>Player Two</h3>
           <ol>
           <li><a href=""> Power: 200</a></li>
            <li><a href=''> Life: 5 </a></li>
            <li><a href="">Speed: 300</a></li>
           </ol>
         </article> 
        </section>

      </div>
    )
}
export default Home;