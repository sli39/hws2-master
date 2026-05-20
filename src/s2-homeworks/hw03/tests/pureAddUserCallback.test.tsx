import { pureAddUserCallback, UserType } from '../HW3'

let initialState: UserType[]

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    // делаем "имитацию setState", которая сразу обновляет массив
    const setUsers = (newState: UserType[] | ((prev: UserType[]) => UserType[])) => {
        if (typeof newState === 'function') {
            initialState = newState(initialState)
        } else {
            initialState = newState
        }
    }

    pureAddUserCallback('name', setUsers, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
