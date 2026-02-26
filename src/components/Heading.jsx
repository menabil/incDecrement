const Heading = ({ className,text }) => {
    let headingColor = text
        .replace("#", "<span class='one'>")
        .replace("#", "</span>");

    return <h1 className={`font-extrabold font-sans text-[72px] w-[686px] ${className}`} dangerouslySetInnerHTML={{ __html: headingColor }}></h1>;
};

export default Heading;