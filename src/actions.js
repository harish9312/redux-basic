import { store } from "./store";

export function incrementValue() {
    return {
        type: 'INCREMENT'
    }
}

export function decrementValue() {
    return {
        type: 'DEC'
    }
}