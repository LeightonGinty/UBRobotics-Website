import Hero from "./HeroImage";
import RobotDesk from "./RobotDesk.JPG";

function NewsPage() {
    return ( <div>
        <Hero image={RobotDesk} />
        <p>
            This is a lot more writing to look at.
        </p>
    </div> );
}

export default NewsPage;