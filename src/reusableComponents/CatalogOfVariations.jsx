import { useState } from "react";
import workData from "../../workData.json";

export const CatalogOfVariations = () => {

    // Sort the workData by title, dimensions, year, and material_description
    const sortedByTitle = [...new Set(workData.map(work => work.title))].sort();
    const sortedByYear = [...new Set(workData.map(work => work.year))].sort((a, b) => a - b);  // Numeric comparison for years
    const sortedByDimensions = [...new Set(workData.map(work => work.dimensions))].sort();
    const sortedByMaterial = [...new Set(workData.map(work => work.material_description))].sort();

    return (
        <div className="font-serif">
            <h1 className="text-3xl text-center font-bold my-6">Catalog of Variations</h1>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 mx-auto max-w-2xl">
                    {/* Titles List - Display unique titles, sorted */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Titles:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {sortedByTitle.map((title, index) => (
                                <li key={`title_${index}`}>{title}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Dimensions List - Display unique dimensions, sorted */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Dimensions:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {sortedByDimensions.map((dimension, index) => (
                                <li key={`dimension_${index}`}>{dimension}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Year List - Display unique years, sorted */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Year:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {sortedByYear.map((year, index) => (
                                <li key={`year_${index}`}>{year}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Materials List - Display unique materials, sorted */}
                    <div className="m-6 lg:col-span-2">
                        <h2 className="text-l font-bold">Materials:</h2>
                        <ul className="text-sm list-disc pl-5">
                            {sortedByMaterial.map((material, index) => (
                                <li key={`material_${index}`}>{material}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

