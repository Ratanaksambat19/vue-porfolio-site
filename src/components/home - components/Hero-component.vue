<template>
    <div class="hero-section">
        <div class="intro">
            <div class="name">I'm <br><div class="line"></div> SAMBATH</div>
            
            <div class="hire-me"><router-link to='/contact' class="button">HIRE ME</router-link></div>
        </div>

        <div class="avatar">
            <div class="title">
                <h1>DEVELOPER <br> UI & UX DESIGNER</h1>
            </div>
            <div class="aniamte">
                <HeroIcon name = 'avatar'/>
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
    }
    
}
</script>

<style lang="scss" scoped>
    $pink: #FD4066;
    $darkgray:  #2a2a2a;
    .hero-section {
        display: grid;
        background-color: $darkgray;
        grid-template-columns: 1fr 1fr 1fr;
        
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
        }
        .hire-me {
            margin-top: 30%;
            padding: 20px 50px 20px 50px;
            display: inline-block;
            background-color: $pink;
            
            
            .button {
                font-size: 30px;
                font-weight: bold;
                letter-spacing: 0.3rem;
            }
        }
    }
    .avatar {
        display: block;
        // justify-content:center;
        
        .title {
            margin-top: 2%;
            text-align: center;
            color: white;
            font-weight: bold;
            font-size: 20px;
        }

        .animate {
            color: $pink;
            padding: 50%;
        }
    }
    .description {
        justify-self: center;
        align-self: center;
        text-align: center;
        margin-right: 10%;
        color: white;
    }
</style>