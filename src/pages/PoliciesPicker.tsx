import { useState } from "react";
import IdeasTable from "../components/IdeasTable/IdeasTable";

export default function PoliciesPickerPage() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (id: number) => {
        console.log(`Clicked cell #${id}`);
      };
    
      return (
        <>
        <span>here policies table</span>
        <IdeasTable isOpen={isOpen} onToggle={setIsOpen} />
        </>
      );
}