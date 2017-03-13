<template>
  <main class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon button" @click.native="toggleLeftSidenav">
        <md-icon md-theme="green" class="md-primary">menu</md-icon>
      </md-button>

      <h1 class="md-title">{{ title }}</h1>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="">
        <div class="md-toolbar-container">
          <h2 class="">Navegação</h2>
        </div>
      </md-toolbar>

      <md-list @click.native="closeLeftSidenav">
        <md-list-item>
          <router-link to="">
            <md-icon>person</md-icon> <span>Perfil</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/categories">
            <md-icon>flag</md-icon> <span>Categorias</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/products">
            <md-icon>dashboard</md-icon> <span>Produtos</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>backspace</md-icon> <span>Sair</span>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>
      </md-list>

    </md-sidenav>

    <md-layout>
      <router-view></router-view>
    </md-layout>

  </main>
</template>

<script>

export default {
  name: 'FirstComponent',

  data () {
    return {
      title: 'Mini Commerce'
    }
  },

  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    closeLeftSidenav () {
      this.$refs.leftSidenav.close()
    }
  }
}
</script>

<style>
.md-sidenav-content {
  overflow-wrap: break-word;
}
p {
    padding: 0 15px;
}
</style>
