<template>
  <div class="mobile">
        <ul class="nav-links-mobile">
            <li class="github">
              <a href="#"><icon name = 'github'></icon></a>
            </li>
            <li><a href="#">PROJECT</a></li>
            <li><a href="#">ABOUT</a></li>  
            <li><a href="#">CONTACT</a></li>
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
    // flex-direction: column;
    // justify-content: center;
    width: 50%;
    height: 100%;
  }
  .nav-links-mobile {
    position: absolute;
    left: 30%;
    // justify-content: space-around;
  }
  .nav-links-mobile li{
    margin-top: 50%;
    margin-bottom: 50%;
    justify-self: center;
  }
</style>
