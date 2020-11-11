<template>
    <div class="hero-section">
        <div class="intro">
            <div class="name">I'm <br><div class="line"></div> SAMBATH</div>
            
            <div class="hire-me" :class="HireMeClass" @mouseover="mouseover" @mouseleave="mouseleave"><router-link to='/contact' class="button">{{HireMe}}</router-link></div>
            <div class="info">
                <h1>A college Student Who is exploring New Technology. <br> <br> A Freelancer Who is Hoping To Bring Your Idea To Life...</h1>
            </div>
        </div>

        <div class="avatar">
            <div class="title">
                <h1>DEVELOPER <br> UI & UX DESIGNER</h1>
            </div>
            <div class="animate">
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
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Comfortaa', cursive;
        display: grid;
        background-color: $darkgray;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        
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
    .info h1{
            display: none;
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

    @media screen and (max-width: 1250px) {
        .avatar {
            .title {
                font-size: 15px;
            }
        }
        
        .animate {
            margin-top: -25%;
            transform: scale(0.6);
        }
        .description {
            display: none;
        }
        
        .info h1 {
            display: inline-block;
            font-size: 20px;
            color: white;
            text-align: center;
            padding: 10%;
            margin-left: -20%;
        }

        .intro {
            margin-left: 20%;
            .name {
            font-size: 40px;
            color: white;
            }

            .line {
                background-color:$pink;
                width: 12.5rem;
                height: 2px;
                margin: 10px 0px 15px 0px;
            }
            .hire-me {
                margin-top: 10%;
                width: 12rem;
                padding: 20px 30px 20px 30px;

                .button {
                    font-size: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .hero-section {
            display: none;
        }
    }
</style>