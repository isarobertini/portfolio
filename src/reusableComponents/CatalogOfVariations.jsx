import { useState } from "react";
import workData from "../../workData.json";

export const CatalogOfVariations = () => {
    return (
        <div className="">
            <h1 className="text-3xl text-center font-bold my-6">Catalog of Variations</h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl">
                    {/* Titles List - Display All Titles Once */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Titles:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {workData.map((work) => (
                                <li key={work.id}>{work.title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Dimensions List - Display All Dimensions Once */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Dimensions:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {workData.map((work) => (
                                <li key={work.id}>{work.dimensions}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Year List - Display All Years Once */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Year:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {workData.map((work) => (
                                <li key={work.id}>{work.year}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Materials List - Display All Materials Once */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Materials:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {workData.map((work) => (
                                <li key={work.id}>{work.material_description}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
