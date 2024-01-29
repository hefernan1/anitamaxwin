import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';

export default function Nrike() {

	const [falsy, setFalsy]=  useState(false);
	const [isExploding, setIsExploding] = useState(false);

	return (
    <div className="h-screen flex items-center justify-center flex-col">
		<>{isExploding && <ConfettiExplosion />}</>
      <Drawer>
        <DrawerTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 fill-rose-800 hover:scale-125 transition duration-200 ease-in-out"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        </DrawerTrigger>
        <div className="mx-auto w-full max-w-sm">
          <DrawerContent className="h-3/4 bg-rose-800">
            <DrawerHeader>
              <DrawerTitle className="text-[#FFF0DB] text-2xl font-serif tracking-wide">
                Veux-tu être ma valentine ?
              </DrawerTitle>
             
                <div className="flex flex-row space-x-8 items-center justify-center mt-8">
				<DrawerClose>
                  <button onClick={()=> { setTimeout(() => {
    setIsExploding(true)
}, 500);
}} className="bg-rose-300 p-2 px-3 rounded-md text-2xl">
                    Oui
                  </button>
				  </DrawerClose>
                  <button onClick={()=> { setFalsy(true)}} className="bg-rose-400 p-2 px-3 rounded-md text-2xl inline-flex flex-row items-center">
				  
				  { falsy && <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>}
                    Non
                  </button>
                </div>
              
            </DrawerHeader>
          </DrawerContent>
        </div>
      </Drawer>
    </div>
  );
}
