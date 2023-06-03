import Card from "../../src/components/Card";
import { dataArray } from "./data";

const Index = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {dataArray &&
        dataArray.map((cardData, index) => {
          return (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4"
              key={index}
            >
              <Card {...cardData} />
            </div>
          );
        })}
    </div>
  );
};

export default Index;
