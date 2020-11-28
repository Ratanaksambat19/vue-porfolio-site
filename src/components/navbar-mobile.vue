<template>
  <div class="mobile">
        <ul class="nav-links-mobile">
            <li class="github">
              <a href="#"><icon name = 'github'></icon></a>
            </li>
            <li><router-link to="/">PROJECT</router-link></li>
            <li><router-link to="/about">ABOUT</router-link></li>  
            <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
  </div>
    
</template>
<script>
import Icon from './icon - components/logo - component.vue'

export default {
    name: 'navbar',
    components: {
        'icon': Icon,
    }, 
}
</script>

<style lang="scss">
  .mobile {
    display: flex;
    position: absolute;
    background-color: #2a2a2a;
    top: 10%;
    left: 50%;
    z-index: 0;
    width: 50%;
    height: 100%;
  }
  .nav-links-mobile {
    position: absolute;
    left: 15%;
  }
  .nav-links-mobile li{
    margin-top: 50%;
    margin-bottom: 50%;
    justify-self: center;
  }
</style>
