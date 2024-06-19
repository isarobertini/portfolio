import { Modal } from "../common/Modal";
import { useState } from "react";

export const ImageGrid = ({ images }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <Modal show={showModal} onClose={handleCloseModal} image={selectedImage} />
        </div>
    );
};