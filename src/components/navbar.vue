<template>
  <div>
    <nav>
        <div class="logo">
          <router-link to="/"><icon name = 'logo'></icon></router-link>
        </div>
        
        <ul class="nav-links">
            <li class="github">
              <a href="#"><icon name = 'github'></icon></a>
            </li>
            <li><router-link to="/">PROJECT</router-link></li>
            <li><router-link to="/about">ABOUT</router-link></li>  
            <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>

        <div class="burger" @click="burgerFn">
            <icon name = "burger"/>
        </div>
        <transition name='slide-fade'>
          <NavMobile class="show-mobile" v-if="showNavbar"/>
        </transition>
    </nav>
    
  </div>
    
</template>
<script>
import Icon from './icon - components/logo - component.vue'
import navMobile from './navbar-mobile'
export default {
    name: 'navbar',
    components: {
        'icon': Icon,
        'NavMobile': navMobile,
    }, 

    data() {
      return {
        // burgerNav: ['nav-'],
        showNavbar: false,
      }
    },

    methods: {
      burgerFn:function() {
        // this.burgerNav = ['nav-links']
        this.showNavbar = !this.showNavbar
      }
    }
}
</script>

<style lang="scss">

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 5px;
  background-color: #2a2a2a;
  align-items: center;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-left: 40%;
}

.burger {
  display: none;
}

.show-mobile {
  opacity: 0;
  transform: translateX(100%);
}

/* CATAGOER STYLING HERE! */
$red: #f37272;
$whitey: #f0f0f0;

$duration: 0.2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);

body {
  font-family: 'Montserrat', sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  text-align: center;


  li {
    margin: 0 20px;
    align-self: center;
  }
}

 @media screen and (max-width: 1000px) {
    body {
      overflow-x: hidden;
    }

    .logo {
      margin-left: 13%;

    }
    .show-mobile {
      opacity: 1;
      transform: translateX(0%);
    }

    /* durations and timing functions.*/
    .slide-fade-enter-active {
      transition: all .4s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(.13,.54,.7,1.08);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
      transform: translateX(100px);
      opacity: 0;
    }
    .nav-links {
      opacity: 0;
    } 

    .nav-links li {
      opacity: 1;
    }

    .burger {
      display: inline-block;
      z-index: 1;
      cursor: pointer;
      position: absolute;
      top: 0%;
      left: 80%;
    }

    .nav-links {
      transform: translateX(0%);
    }
  } 

a {
  font-size: 20px;
  letter-spacing: 0.3rem;
  color: $whitey;
  font-weight: bold;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 8px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: $red;
  }
  &:before {
    opacity: 0;
    transform: translateY(-$distance);
    transition: transform 0s $easeOutBack, opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY($distance/2);
    transition: transform $duration $easeOutBack, opacity $duration;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:after {
      transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
    }
  }
}

/* burger here */

</style>