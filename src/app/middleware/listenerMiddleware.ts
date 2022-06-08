import { createListenerMiddleware, PayloadAction } from "@reduxjs/toolkit";
import { setCouncil, setFiscalYear, setRegion } from "../../features/menus/fiterMenu/filterMenuSlice";

export const listenerMiddleware = createListenerMiddleware();

    listenerMiddleware.startListening(
        {
            actionCreator: setFiscalYear,
            effect:async (action:PayloadAction<string>) => {
                localStorage.setItem('fiscalYear', action.payload);
            }
        }
    );

    listenerMiddleware.startListening(
        {
            actionCreator: setRegion,
            effect:async (action:PayloadAction<string>) => {
                localStorage.setItem('region', action.payload);
            }
        }
    );

    listenerMiddleware.startListening(
        {
            actionCreator: setCouncil,
            effect:async (action:PayloadAction<string>) => {
                localStorage.setItem('council', action.payload);
            }
        }
    );