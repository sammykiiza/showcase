import { createListenerMiddleware, PayloadAction } from "@reduxjs/toolkit";
import { setCouncil, setFiscalYear, setRegion } from "../../features/menus/fiterMenu/filterMenuSlice";

export const listenerMiddleware = createListenerMiddleware();

    listenerMiddleware.startListening(
        {
            actionCreator: setFiscalYear,
            effect:async (action:PayloadAction<string>, listenerApi) => {
                localStorage.setItem('fiscalYear', action.payload);
                listenerApi.cancelActiveListeners();
            }
        }
    );

    listenerMiddleware.startListening(
        {
            actionCreator: setRegion,
            effect:async (action:PayloadAction<string>, listenerApi) => {
                localStorage.setItem('region', action.payload);
                listenerApi.cancelActiveListeners();
            }
        }
    );

    listenerMiddleware.startListening(
        {
            actionCreator: setCouncil,
            effect:async (action:PayloadAction<string>, listenerApi) => {
                localStorage.setItem('council', action.payload);
                listenerApi.cancelActiveListeners();
            }
        }
    );