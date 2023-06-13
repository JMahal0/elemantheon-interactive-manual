import React from "react";

interface ContentSectionProps {
    sectionTitle: string;
    paragraphsJsx: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ sectionTitle, paragraphsJsx }) => {
    return (
        <div className="p-4 max-w-sm mx-auto mb-4 bg-white rounded-xl shadow-lg">
        <div className="text-center text-xl font-semibold border-b-2 mb-2 border-amber-800">{sectionTitle}</div>
        <div className="text-slate-800 space-y-1">{paragraphsJsx}</div>
    </div>

    );
}

export default ContentSection;