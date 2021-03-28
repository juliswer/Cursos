<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="danger">
      <b-container>
            <b-navbar-brand :to="{name: 'Home'}">NasheCompany</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse is-nav id="nav_collapse">
              <b-navbar-nav>
                <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
                <b-nav-item :to="{name: 'About'}">About</b-nav-item>
                <b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>  
              </b-navbar-nav>
            </b-collapse>
            
      </b-container>
    </b-navbar>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>