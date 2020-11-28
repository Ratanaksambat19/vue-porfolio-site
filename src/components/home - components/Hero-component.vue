<template>
    <div class="hero-section">
        <div class="intro" v-scrollanimation>
            
            <!-- <div class="intro-title"><h1>DEVELOPER <br> UI & UX DESIGNER</h1></div> -->
            <div class="name">I'm <br><div class="line"></div> SAMBATH</div>
            <div class="hire-me" :class="HireMeClass" @mouseover="mouseover" @mouseleave="mouseleave"><router-link to='/contact' class="button">{{HireMe}}</router-link></div>
            <div class="info">
                <h1>A college Student Who is exploring New Technology. <br> <br> A Freelancer Who is Hoping To Bring Your Idea To Life...</h1>
            </div>
        </div>

        <div class="avatar">
            <div class="title" v-scrollanimation>
                <h1>DEVELOPER <br> UI & UX DESIGNER</h1>
            </div>
            <div class="animate">
                <HeroIcon name = 'hero-avatar'/>
            </div>
        </div>

        <div class="description" v-scrollanimation>
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
            this.HireMe = 'SAY "HI"!'
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
        padding-top: 7%;
        box-sizing: border-box;
        font-family: 'Comfortaa', cursive;
        display: grid;
        background-color: $darkgray;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        padding-bottom: 5%;
    }

    .intro {
        transition-delay: 0.9s;
        justify-self: center;
        align-self: center;

        // .intro-title {
        //     display: none;
        // }

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
            display: inline-block;
            background-color: $pink;
            animation-duration: 1s;
            cursor: pointer;
            -animate-repeat: 4;
            
            .button {
                font-size: 30px;
                background-color: $pink;
                padding: 20px 50px 20px 50px;
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
            transition-delay: 0.2s;
            margin-top: 5%;
            text-align: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
            padding-bottom: 5%;
        }
    }
    .description {
        transition-delay: 1s;
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
                margin-bottom: 30px;
            }

            .animate {
            margin-top: -30%;
            transform: scale(0.6);
            }
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
                
                .button {
                    font-size: 20px;
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        .hero-section {
            margin-top: -9px;
        }

        .avatar {

            .title {
                margin-top: 13%;
            }
            grid-row: 1;
            .animate {
                transform: scale(0.7);
                margin-right: 30%;
            }
        }
        
        .intro {
            margin-top: -10%;
            margin-left: 25%;
        }

        .info h1 {
            margin-top: 10%;
            margin-right: 15%;
        }
    }

    .before-enter {
        opacity: 0;
        transform: translate(-100px, -50px) scale(.5);
        transition: all 3s cubic-bezier(.21,.84,.89,1.49);
    }

    .enter {
        opacity: 1;
        transform: translate(0);
    }
    /* Another layout */
    /*@media screen and (max-width: 800px) {
        .hero-section {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            margin-top: -10%;
        }

        .info h1 {
            display: none;
        }
        .avatar {
            margin-right: 50%;
            margin-top: -30%;
            .title {
                font-size: 15px;
                display: none;
            }

            .animate {
            transform: scale(0.5);
            }
        }

        .intro {
            margin-left: 13%;
            grid-column: 1/2;

            .intro-title{
                display: inline-block;
                color: white;
                font-size: 10px;
                margin-top: -50%;
                margin-bottom: 30%;
                text-align: center;
            }

            .name {
            font-size: 20px;
            color: white;
            }

            .line {
                background-color:$pink;
                width: 5rem;
                height: 2px;
                margin: 10px 0px 15px 0px;
            }

            .hire-me {
                margin-top: 5%;
                // width: 9rem;
                padding: 20px 30px 20px 30px;

                .button {
                    display: inline;
                    font-size: 15px;
                }
            }
        }

        .description {
            display: block;
            margin-top: -30%;
            border: solid 2px $pink;
            padding: 20px;
            margin-left: 10%;
            font-style: italic;
            font-size: 10px;
            grid-column: 1/3;
        }
    } */
</style>