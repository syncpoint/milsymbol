/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
import { ms } from "./src/milsymbol.js";

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
import { app6b, std2525b, std2525c } from "./src/lettersidc.js";
ms.addIcons(app6b);
ms.addIcons(std2525b);
ms.addIcons(std2525c);

/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
import { app6d, std2525d } from "./src/numbersidc.js";
ms.addIcons(app6d);
ms.addIcons(std2525d);

/* ***************************************************************************************
This draws the symbol octagon, can be good for debugging.
*************************************************************************************** */
//import debug from "./symbolfunctions/debug.js";
//ms.addSymbolPart(debug);

/* ***************************************************************************************
This makes it possible to draw canvas paths in IE11
*************************************************************************************** */
import path2d from "./src/ms/path2d.js";
ms.Path2D = path2d;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
export default ms;
