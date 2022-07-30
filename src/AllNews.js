import Footer from "./Footer";
import News from "./News";
import Nav from "./Nav";
// import Footer from "./Footer";
export default function AllNews() {
    return ( 
    <main>
        <Nav/>

        <div className="newsControl">
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        </div>
        
        <Footer/>
    </main> );
}

// export default AllNews;