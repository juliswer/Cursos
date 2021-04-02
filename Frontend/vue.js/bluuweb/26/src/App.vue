<template>
  <div id="app">
    
    <b-breadcrumb class="m-5">
    <b-breadcrumb-item :to="{name: 'Home'}">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item :to="{name: 'About'}">About</b-breadcrumb-item>
    <b-breadcrumb-item :to="{name: 'Grid'}">Grid</b-breadcrumb-item>
    <b-breadcrumb-item :to="{name: 'Cards'}">Cards</b-breadcrumb-item>
    <b-breadcrumb-item :to="{name: 'Form'}">Form</b-breadcrumb-item>
    <b-breadcrumb-item :to="{name: 'Video'}">Video</b-breadcrumb-item>
  </b-breadcrumb>
  <b-container>
  <router-view/>
  </b-container>
  </div>
</template>
