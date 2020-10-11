import {instance} from './Instance';


export const friendsApi = {
    getFriends() {
        return instance.get(`users?friend=${true}`
        )
            .then(response => response.data)
    },
}