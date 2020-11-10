<template>
    <div class="hero-section">
        <div class="intro">
            <div class="name">I'm <br><div class="line"></div> SAMBATH</div>
            
            <div class="hire-me" :class="HireMeClass" @mouseover="mouseover" @mouseleave="mouseleave"><router-link to='/contact' class="button">{{HireMe}}</router-link></div>
        </div>

        <div class="avatar">
            <div class="title">
                <h1>DEVELOPER <br> UI & UX DESIGNER</h1>
            </div>
            <div class="aniamte">
                <HeroIcon name = 'hero-avatar'/>
            </div>
        </div>

        <div class="description">
            <h1>A college Student Who is exploring New Technology. <br> <br> A Freelancer Who is Hoping To Bring Your Idea To Life...</h1>
        </div>
    </div>
</template>
<script>
import HeroIcon from '@/components/icon - components/HeroIcon - component.vue'
export default {
    components: {
        HeroIcon
    },
    data() {
        return {
            HireMe: 'HIRE ME',
            HireMeClass: [],
        }
    },
    methods: {
        mouseover() {
            this.HireMe = 'SAY HI!'
            this.HireMeClass = ['animate__animated', 'animate__bounce',  'animate__delay-0.8s']
        },
        mouseleave() {
            this.HireMe = 'HIRE ME'
            this.HireMeClass = []
        }
    },
    
}
</script>

<style lang="scss" scoped>
    @import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap);

    $pink: #FD4066;
    $darkgray:  #2a2a2a;
    .hero-section {
        font-family: 'Comfortaa', cursive;
        display: grid;
        background-color: $darkgray;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        
    }
    .intro {
        justify-self: center;
        align-self: center;

        .name {
            font-size: 50px;
            color: white;
        }
        .line {
            background-color:$pink;
            width: 16rem;
            height: 2px;
            margin: 10px 0px 15px 0px;
        }
        .hire-me {
            margin-top: 30%;
            padding: 20px 50px 20px 50px;
            width: 17rem;
            display: inline-block;
            background-color: $pink;
            animation-duration: 1s;
            cursor: pointer;
            -animate-repeat: 4;
            
            
            .button {
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 0.3rem;
            }
        }
    }
    .avatar {
        display: block;
        
        .title {
            margin-top: 2%;
            text-align: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
            padding-bottom: 5%;
        }
    }
    .description {
        justify-self: center;
        align-self: center;
        text-align: center;
        margin-right: 10%;
        color: white;
    }

    @media screen and (max-width: 1200px) {
        
    }
</style>