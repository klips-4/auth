<template src="./template.html">

</template>
<script>
import SourceService from "@/services/SourceService";
import {AuthHelpers} from "@/helpers/AuthHelpers";
import notification from "@/components/Notifications/Notification";

export default {
  components: {notification},
  name: "CustomerPage",
  data() {
    return {
      step: 1,
      name: '',
      surname: '',
      firstname: '',
      telephone: '',
      last_telephone: '',
      street: '',
      city: '',
      frame: '',
      flat: '',
      source: new SourceService({endpoint: 'Client'}),
      messages: []
    }
  },
  methods: {
    submit() {
      const rec = {
        ...this.clients, client_name: this.name, user_id: AuthHelpers.getUser(), client__surname: this.surname,
        client_firstname: this.firstname, client_telephone:this.telephone, client_last_telephone: this.last_telephone
      };
      this.source.update(rec).then((result) => {
        let timeStamp = Date.now().toLocaleString();
        if (result.success) {
          this.surname = '';
          this.name = '';
          this.telephone = "";
          this.firstname = "";
          this.last_telephone = "";
          this.$emit('submit');
          this.messages.unshift({name: 'Контакт добавлен', id:timeStamp});
          setTimeout(() => {
            const newMessage = [];
            this.messages.forEach((message) => {
              if (message.id !== timeStamp) {
                newMessage.push(message)
              }

              this.messages = newMessage
            })
          }, 3000)
        }
      });
    },
    nextStep() {
      this.step++
    },
    backStep() {
      this.step--
    }
  }
}
</script>

<style scoped src="./style.less" lang="less">

</style>