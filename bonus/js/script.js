const app = new Vue (
  {
    el: "#app",
    data: {
      emails: [],
    },
    methods: {
      generate: function () {
        for (let i = 0; i < 10; i++) {
          axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
            console.log(response.data.response);
            this.emails.push(response.data.response);
          })
          .catch((error) => {
            console.log(error);
          })
        }
      }
    },
    created() {
      console.log('array', this.emails);
    }
  }
  );