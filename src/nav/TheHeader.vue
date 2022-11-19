<template>
  <header>
    <h1>Find a Coach</h1>
    <router-link to="/coaches">All Coaches</router-link>
    <router-link to="/requests">Requests</router-link>
  </header>
</template>

<style lang="scss" scoped>

header {
  display: flex;
  align-items: center;
  background-color: purple;
  padding: 10px 30px;
  h1 {
    color: white;
    margin-right: auto;
    margin-left: 50px;
    font-size: 1.6rem;
  }
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    padding-bottom: 0.25rem;
    margin: 0 20px;
  }
  a:hover,
  a:active,
  a.router-link-active {
    color: #45006d;
    border-color: #45006d;
  }
}

</style>