import {
	Message
} from 'element-ui'



let nsMessage = (type,message) => {
    Message({
        type,
        message,
        showClose: true,
        offset: 50
    })
}

export default nsMessage

