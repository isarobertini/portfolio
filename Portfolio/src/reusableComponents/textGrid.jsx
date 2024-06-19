
export const TextGrid = ({ texts }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {texts.map((text, index) => (
                    <div key={index} className="cursor-pointer">
                        <div className="bg-white p-4 border border-black hover:border-gray-300">

                            <h3 className="text-lg font-semibold mb-2">{text.title}</h3>
                            <p className="text-sm text-gray-600">{text.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
