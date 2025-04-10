import Idea from "../Idea/Idea";
import Modal from "../Modal/Modal";

type IdeasTableProps = {
  isOpen: boolean
  onToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export default function IdeasTable( props: IdeasTableProps) {
  const {isOpen, onToggle} = props;

  
    const handleClick = (id: number) => {
        onToggle(prev => !prev);
      };
    
      return (
        <>
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
          <Modal isOpen={isOpen} onClose={function (): void {
            onToggle(false);
            console.log('do something with modal')
          } } children={<div>test modal</div>} />
        </>
      );
}