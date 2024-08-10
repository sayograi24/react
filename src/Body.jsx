import './Body.css';

window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('./reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop > windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
function Body(){
    return(
        <>
        <div id="check">
            <h3>hello</h3>
        </div>
        <div className="container">
            
            <div id="box1">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus doloremque, vero voluptatem amet similique quae corporis nulla! Corrupti minima quasi tenetur enim, modi error doloribus voluptatum corporis odit maxime illo!</p>
            </div>
            <div id="box2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus vel deserunt cumque voluptatum modi totam quae facere, assumenda velit quisquam sapiente exercitationem inventore? Ex id, nesciunt voluptatum dolores incidunt earum.</p>
            </div>
            <div id="box3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore aperiam est sapiente voluptates eligendi vitae labore ab mollitia aliquid impedit, veniam obcaecati veritatis ipsa adipisci excepturi quam explicabo omnis.</p>
            </div>
        </div>
        <div className="container2">
            
            <div id="box1">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus doloremque, vero voluptatem amet similique quae corporis nulla! Corrupti minima quasi tenetur enim, modi error doloribus voluptatum corporis odit maxime illo!</p>
            </div>
            <div id="box2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus vel deserunt cumque voluptatum modi totam quae facere, assumenda velit quisquam sapiente exercitationem inventore? Ex id, nesciunt voluptatum dolores incidunt earum.</p>
            </div>
            <div id="box3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore aperiam est sapiente voluptates eligendi vitae labore ab mollitia aliquid impedit, veniam obcaecati veritatis ipsa adipisci excepturi quam explicabo omnis.</p>
            </div>
        </div>
        <div className="container3">
            
            <div id="box1">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus doloremque, vero voluptatem amet similique quae corporis nulla! Corrupti minima quasi tenetur enim, modi error doloribus voluptatum corporis odit maxime illo!</p>
            </div>
            <div id="box2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus vel deserunt cumque voluptatum modi totam quae facere, assumenda velit quisquam sapiente exercitationem inventore? Ex id, nesciunt voluptatum dolores incidunt earum.</p>
            </div>
            <div id="box3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore aperiam est sapiente voluptates eligendi vitae labore ab mollitia aliquid impedit, veniam obcaecati veritatis ipsa adipisci excepturi quam explicabo omnis.</p>
            </div>
        </div>
        </>
    );
}
export default Body