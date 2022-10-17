<template>
  <div class="details" @click="alertBox">
    <h4>{{ person.name }}</h4>
    <b>Age:</b> {{ person.age }} <br />
    <b>Eye Color:</b> {{ person.eyeColor }} <br />
    <b>Gender:</b> {{ person.gender }} <br />
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      alertBox() {
        alert('You clicked on ' + this.person.name);
      },
    },
  };
</script>

<style scoped>
.details {
  background: #e4e4e4;
  min-width: 100px;
  float: left;
  width: 300px;
  margin: 10px;
}
</style>
