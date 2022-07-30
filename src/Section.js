function Section(props) {
    return ( <div id={props.name} className="section" > 
        <p className="miniHeading"> {props.name}
        <h4 className="content">
            {props.details}
        </h4>
        </p>

    </div> );
}

export default Section;