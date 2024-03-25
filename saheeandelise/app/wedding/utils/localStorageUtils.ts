// utils/localStorageUtils.ts

// Check for localStorage availability
export const isLocalStorageAvailable = (): boolean => {
    return typeof window !== 'undefined';
};

// Save data to localStorage
export const saveNameToLocalStorage = (firstName: string, lastName: string): void => {
    if (isLocalStorageAvailable()) {
        const userData = { firstName, lastName };
        window.localStorage.setItem('userData', JSON.stringify(userData));
    }
};

// Retrieve data from localStorage
export const getNameFromLocalStorage = (): { firstName: string; lastName: string } | null => {
    if (isLocalStorageAvailable()) {
        const userData = window.localStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    }
    return null;
};
