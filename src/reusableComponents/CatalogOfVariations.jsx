import { useState } from "react";
import workData from "../../workData.json";

export const CatalogOfVariations = () => {
    // Sort the workData by title, dimensions, year, and material_description
    const sortedByTitle = [...new Set(workData.map(work => work.title))].sort();
    const sortedByYear = [...new Set(workData.map(work => work.year))].sort((a, b) => a - b);  // Numeric comparison for years
    const sortedByDimensions = [...new Set(workData.map(work => work.dimensions))].sort();
    const sortedByMaterial = [...new Set(workData.map(work => work.material_description))].sort();

    return (
        <div className="font-serif p-6">

            {/* Grid layout for all the attributes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 mx-auto max-w-5xl p-6 ">

                {/* Titles List */}
                <div className="m-6 border-l-2 border-gray-300 p-4">
                    <h2 className="text-xl  text-gray-700">Titles of Sculptures:</h2>
                    <ul className="text-sm list-inside">
                        {sortedByTitle.map((title, index) => (
                            <li key={`title_${index}`} className="text-gray-600">{title}</li>
                        ))}
                    </ul>
                </div>

                {/* Dimensions List */}
                <div className="m-6 border-l-2 border-gray-300 p-4">
                    <h2 className="text-xl  text-gray-700">Dimensions of Sculptures:</h2>
                    <ul className="text-sm list-inside">
                        {sortedByDimensions.map((dimension, index) => (
                            <li key={`dimension_${index}`} className="text-gray-600">{dimension}</li>
                        ))}
                    </ul>
                </div>

                {/* Year List */}
                <div className="m-6 border-l-2 border-gray-300 p-4">
                    <h2 className="text-xl  text-gray-700">Year of Creation:</h2>
                    <ul className="text-sm list-inside">
                        {sortedByYear.map((year, index) => (
                            <li key={`year_${index}`} className="text-gray-600">{year}</li>
                        ))}
                    </ul>
                </div>

                {/* Materials List */}
                <div className="m-6 border-l-2 border-gray-300 p-4">
                    <h2 className="text-xl text-gray-700">Materials Used in Sculptures:</h2>
                    <ul className="text-sm list-inside">
                        {sortedByMaterial.map((material, index) => (
                            <li key={`material_${index}`} className="text-gray-600">{material}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
