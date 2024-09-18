<script setup>
// @ts-check
import { testStr } from '@/utils/test'
import { testStrAndLog } from '@/utils/caller'
import userService from '@/utils/userService'
import { ref } from 'vue';
import { date, z } from 'zod';
/**
 * @typedef {import('@/utils/userService').User} User
*/

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const flexDate = z.union([
    z.string().transform((date) => {
      return new Date(date.split('/').reverse().join('-'));
    }),
    z.date()
  ])

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  birthDate: z.union([
    z.string().transform((date) => {
      return new Date(date.split('/').reverse().join('-'));
    }),
    z.date()
  ]) 
});

const message = UserSchema.safeParse({ name: 'Lorenzo', age: 12, birthDate: '07/08/2007' });
console.log(message);
if (message.success) {
  console.log(message.data);
}

const userRef = ref(userService.getUsers());

testStrAndLog('Barbara');

/**
 * 
 * @param {string} value  Il valore da modificare
 */
function test(value) {
  return value + 2;
}

/**
 * 
 * @param {Object} o  L'oggetto da testare
 */
function testObject(o) {
  console.log(o);
}

/**
 * 
 * @param {User} user L'utente da loggare
 */
function logUser(user) {
  console.log(user.name);
}

logUser(userRef.value[0]);

testObject(12);

testStr('Lorenzo');

console.log(test('2'));

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div>
    <ul>
      <li v-for="u in userRef" :key="u.name">{{ u.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
