class Chatbot {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }
        this.state = false;
        this.messages = []
    }
    display() {
        const { openButton, chatBox, sendButton } = this.args
        openButton.addEventListener('click', () => this.toggleState(chatBox))
        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input')
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        if (this.state) {
            chatbox.classList.add('chatbot--active')
        } else {
            chatbox.classList.remove('chatbot--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input')
        let text1 = textField.value
        if (text1 == "") {
            return;
        }
        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1)

        fetch($SCRIPT_ROOT + "/predict", {
            method: "POST",
            body: JSON.stringify({ message: text1 }),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Sam", message: r.answer }
                this.messages.push(msg2)
                this.updateChatText(chatbox)
                textField.value = ""
            }).catch(err => {
                console.error('Error:', err)
                this.updateChatText(chatbox)
                textField.value = ""
            })
    }
}