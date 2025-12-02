import axios from "axios";
import { atom, selector } from "recoil";

export const atomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        // map, filter
        const foundTodo = null;
        for(let i=0; i<TODOS.lenght; i++)
        {
            if(TODOS[i].id === id){
                foundTodo = TODOS[i]
            }
        }
        return foundTodo
    }
})
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get : async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})