import Idea from "../components/Idea/Idea";

export default function PoliciesPickerPage() {
    const handleClick = (id: number) => {
        console.log(`Clicked cell #${id}`);
      };
    
      return (
        <div className="grid grid-cols-2 gap-2">
          {[...Array(8)].map((_, id) => (
              <div
                key={id}
                className="p-4 border cursor-pointer"
                onClick={() => handleClick(id)}
              >
                <Idea />
              </div>
            ))}
        </div>
      );
}