// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AlphaTabApi, Settings } from "@coderline/alphatab";

// export function GuitarProReader() {
//     const elementRef = useRef<HTMLDivElement>(null);
//     const [api, setApi] = useState<AlphaTabApi>();
    
//     useEffect(() => {
//         const api = new AlphaTabApi(elementRef.current!, {
//         core: {
//             file: '/public/gp/dolor.gp', // Local file path
//             fontDirectory: '/alphatab/font/'
//         },
//         player: {
//             enablePlayer: true,
//             enableCursor: true,
//             enableUserInteraction: true,
//             soundFont: '/alphatab/soundfont/sonivox.sf2'
//         }
//         } as Settings);

//         setApi(api);

//         return () => {
//         console.log('destroy', elementRef, api);
//         api.destroy();
//         };
//     }, []);
//     console.log('api', api);
//     console.log('ref', elementRef);
//     function playPause() {
//         api?.playPause();
//     }

//     return (
//         <>
//         <button onClick={() => playPause()} className="bg-slate-900 text-white p-2 rounded">
//             Play/Pause
//         </button>
//         <div ref={elementRef} className="mt-4"></div>
//         </>
//     );
// }
