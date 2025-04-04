export default function IdeasTable() {
    const handleClick = (row, col) => {
        console.log(`Clicked cell at row ${row}, col ${col}`);
      };
    
      return (
        <div className="grid grid-cols-2 gap-2">
          {[...Array(4)].map((_, row) => (
            [...Array(2)].map((_, col) => (
              <div
                key={`${row}-${col}`}
                className="p-4 border cursor-pointer"
                onClick={() => handleClick(row, col)}
              >
                Cell {row + 1}, {col + 1}
              </div>
            ))
          ))}
        </div>
      );
}