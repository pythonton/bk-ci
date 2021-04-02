import ajax from '@/utils/request'
import {
    AUDIT_API_URL_PREFIX
} from '@/store/constants'

const prefix = `/${AUDIT_API_URL_PREFIX}/user/pipelines/audit`

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    getUserAudit (_, { projectId, userId, resourceName, status, startTime, endTime, current, limit }) {
        return ajax.get(
            `${prefix}/${projectId}/pipeline`, {
                params: {
                    page: current,
                    pageSize: limit,
                    resourceName: resourceName || undefined,
                    userId: userId || undefined,
                    status: status || undefined,
                    startTime: startTime || undefined,
                    endTime: endTime || undefined
                }
            }
        ).then(response => {
            return response.data
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
