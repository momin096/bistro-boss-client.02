
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="place-items-center my-5">
            <p className="text-lg font-medium text-amber-500 italic mb-5">--- {subHeading} ---</p>
            <h2 className="uppercase text-4xl p-5 font-bold text-white border-b-2 border-gray-400 border-t-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;