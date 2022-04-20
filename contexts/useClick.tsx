import React, {
    createContext,
    ReactElement,
    useContext,
    useReducer
} from 'react'


export type ClickContextType = {
    isNotificationOpen: boolean;
    isPostCreateOpen: boolean;
};

const ClickContextDefaultValue: ClickContextType = {
    isNotificationOpen: false,
    isPostCreateOpen: false
}

export enum Actions {
    TOOGLE_NOTIFICATION_BAR = "toogle-notification-bar",
    TOOGLE_NEW_POST_WRAPPER = "toogle-new-post-open"
}

export const ClickContext = createContext<{
    state: ClickContextType;
    dispatch: React.Dispatch<ClickContextActionType>;
} | null>(null);

type ToogleNotificationBar = {
    type: Actions.TOOGLE_NOTIFICATION_BAR;
};
type TooglePostCreate = {
    type: Actions.TOOGLE_NEW_POST_WRAPPER
};
type ClickContextActionType =
    | ToogleNotificationBar
    | TooglePostCreate;

export const reducer = (
    state: ClickContextType,
    action: ClickContextActionType
): ClickContextType => {
    switch (action.type) {
        case Actions.TOOGLE_NEW_POST_WRAPPER:
            return {
                ...state,
                isNotificationOpen: !state.isNotificationOpen
            }
        case Actions.TOOGLE_NOTIFICATION_BAR:
            return {
                ...state,
                isNotificationOpen: !state.isNotificationOpen
            }
        default:
            return state;
    }
};
export const ClickContextProvider = ({ children }: { children: ReactElement }) => {
    const [state, dispatch] = useReducer(reducer, ClickContextDefaultValue as ClickContextType);
    return (
        <ClickContext.Provider value={{ state, dispatch }}>
            {children}
        </ClickContext.Provider>
    );
};


export default function useClick() {
    const context = useContext(ClickContext);
    if (!context) {
        throw new Error("Context not working!");
    }
    return context;
}
