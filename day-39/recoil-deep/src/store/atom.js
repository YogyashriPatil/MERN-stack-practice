import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    value: 104
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})
export const notificatioAtom = atom({
    key: "notificatioAtom",
    default: 100
})
export const messageAtom = atom({
    key: "messageAtom",
    default: 10
})

export const totalNotificationCount = selector({
    key: "totalNotificationCount",
    get : (( { get } ) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(notificatioAtom)
        const messageAtomCount = get(messageAtom)

        return networkAtomCount + jobsAtomCount + notificationAtomCount + messageAtomCount;
    })
})