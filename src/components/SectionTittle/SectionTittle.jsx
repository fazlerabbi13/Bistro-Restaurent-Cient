
const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-4/12 my-8 text-center "> 
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h1 className=" text-4xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTittle;