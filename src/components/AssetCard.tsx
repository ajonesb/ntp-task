import React from "react";

export interface AssetCardProps {
  title: string;
  description: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AssetCard;
