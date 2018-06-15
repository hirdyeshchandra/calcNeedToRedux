export const ADD_NUM = 'ADD_NUM'
export const SUB_NUM = 'SUB_NUM'

export function addNum(data) {
    return {
        type: ADD_NUM,
        data
    }
}
export function subNum(id) {
    return {
        type: SUB_NUM,
        id
    }
}