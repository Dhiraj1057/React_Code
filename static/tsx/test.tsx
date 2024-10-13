// import React, { useEffect, useRef, useState } from 'react';
// import ReactDOM from 'react-dom/client';

// const Test = () => {
//     const [count, setCount] = useState(0);
//     const alertRef = useRef<HTMLDivElement>(null);
//     useEffect(() => {
//         setTimeout(() => {
//             if (alertRef.current) {
//                 alertRef.current.parentElement?.classList.add('hidden');
//             }
//         }, 1000);

//         return () => {
//             if (alertRef.current) {
//                 alertRef.current.parentElement?.classList.remove('hidden');
//                 alertRef.current.textContent = `count: ${count}`;
//             }
//         }
//     }, [count]);
//     return <>
//         <div className='alert'>
//             <p ref={alertRef}></p>
//             <button onClick={e => e.currentTarget.parentElement?.classList.add('hidden')}>Ok</button>
//         </div>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//         <div className='test'> {count}</div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>;
// };

// ReactDOM.createRoot(document.getElementById('root')!).render(<Test />);
// const board = Array.from({ length: 9 }).fill(null).map(() => Math.random() < .33 ? null : Math.random() > .5 ? "x" : "o");
// console.log(board)
// const shiftedBoard = board.map((value, index) => {
//     if (index === 4) return value; // Keep the middle element unchanged
//     if (index === 5) return board[index + 2];
//     return board[(index + 1 + 9) % 9]; // Shift other elements forward
// });

// console.log("Shifted board:", shiftedBoard);

