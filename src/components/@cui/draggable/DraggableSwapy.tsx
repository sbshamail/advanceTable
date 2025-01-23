"use client";
import { createSwapy } from "swapy";
import React, { FC, useEffect, useRef, useState } from "react";

interface Swapy {
  onSwap: (callback: (event: any) => void) => void;
  destroy: () => void;
}
interface DraggableSwapyType {
  children: React.ReactNode;
}
// export const DraggableSwapy: FC<DraggableSwapyType> = ({ children }) => {
//     // State to hold the mapping of slot items
//     const [slotItemMap, setSlotItemMap] = useState<Map<string, string>>(new Map());

//   const swapy = useRef<Swapy>(null);
//   const container = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     // If container element is loaded
//     if (container.current) {
//       swapy.current = createSwapy(container.current);

//       // Your event listeners
//       swapy.current.onSwap((event) => {
//         console.log("swap", event);
//         const { fromSlot, toSlot, draggingItem } = event;

//         // Create a new map with the updated swap
//         setSlotItemMap((prevMap) => {
//           const newMap = new Map(prevMap);
//           newMap.set(toSlot, draggingItem);
//           newMap.set(fromSlot, event.swappedWithItem);
//           return newMap;
//         });
//       });
//     }

//     return () => {
//       // Destroy the swapy instance on component destroy
//       swapy.current?.destroy();
//     };
//   }, []);
//   return (
//     <div className="relative " ref={container}>
//       {React.Children.map(children, (child) => {
//         if (React.isValidElement(child)) {
//           return React.cloneElement(child, { swapy } as any);
//         }
//         return child;
//       })}
//     </div>
//   );
// };

// interface DraggableSwapyContentType {
//   swapy?: React.RefObject<Swapy | null>; // The swapy instance ref passed down from parent
//   swapyKey: number | string;
//   children: React.ReactNode;
// }

// export const DraggableSwapyContent: FC<DraggableSwapyContentType> = ({
//   swapy,
//   swapyKey,
//   children,
// }) => {
//   // Optionally, you can use `swapy` inside this component if needed
//   useEffect(() => {
//     if (swapy?.current) {
//     }
//     return () => {
//       // Destroy the swapy instance on component destroy
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       swapy?.current?.destroy();
//     };
//   }, [swapy]);

//   return (
//     <div data-swapy-slot={swapyKey}>
//       <div data-swapy-item={swapyKey}>{children}</div>
//     </div>
//   );
// };

// Define DraggableSwapy component
export const DraggableSwapy: FC<{
  setContents: React.Dispatch<React.SetStateAction<any[]>>;
  children: React.ReactNode;
}> = ({ setContents, children }) => {
  const swapy = useRef<Swapy>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Add event listener for swap event
      swapy.current.onSwap((event) => {
        // console.log("swap", event);
        const { fromSlot, toSlot, draggingItem } = event;

        // Update state after a swap
        // setContents((prevContents) => {
        //   const newContents = [...prevContents];
        //   const draggedItem = newContents.find(
        //     (item, index) => item.title === draggingItem
        //   ); // Find dragged item by its unique ID
        //   const swappedItem = newContents.find(
        //     (item, index) => item.title === event.swappedWithItem
        //   );

        //   if (draggedItem && swappedItem) {
        //     // Swap the items in the array
        //     const draggedIndex = newContents.indexOf(draggedItem);
        //     const swappedIndex = newContents.indexOf(swappedItem);
        //     [newContents[draggedIndex], newContents[swappedIndex]] = [
        //       newContents[swappedIndex],
        //       newContents[draggedIndex],
        //     ];
        //   }

        //   return newContents;
        // });
      });
    }

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy();
    };
  }, [setContents]);

  return (
    <div className="relative" ref={container}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { swapy } as any);
        }
        return child;
      })}
    </div>
  );
};

// Define DraggableSwapyContent component
interface DraggableSwapyContentType {
  swapy?: React.RefObject<Swapy | null>;
  swapyKey: string | number; // Accept string or number as swapyKey
  children: React.ReactNode;
}

export const DraggableSwapyContent: FC<DraggableSwapyContentType> = ({
  swapy,
  swapyKey,
  children,
}) => {
  useEffect(() => {
    if (swapy?.current) {
      // Handle swapy instance if needed
    }
    return () => {
      // Clean up on destroy
      // eslint-disable-next-line react-hooks/exhaustive-deps
      swapy?.current?.destroy();
    };
  }, [swapy]);

  return (
    <div data-swapy-slot={swapyKey}>
      <div data-swapy-item={swapyKey}>{children}</div>
    </div>
  );
};
