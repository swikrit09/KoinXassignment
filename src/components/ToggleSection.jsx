import { useState } from "react";

const ToggleSection = () => {
    const [selectedArea, setSelectedArea] = useState("Overview");
    const areas = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technical", "Tokenomics"];
    const getSelectedStyles = (area) => {
        return selectedArea === area ? "text-[#0141CF] border-[#0052FE] border-b-4 pb-4" : "";
    }
    return (
        <div>
            <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
                {areas.map((area, index) => (
                    <div key={index} className={`${getSelectedStyles(area)} cursor-pointer`} onClick={() => setSelectedArea(area)}>
                        {area}
                    </div>
                ))}
            </div>
            <hr className=""></hr>
        </div>
    );
}

export default ToggleSection;