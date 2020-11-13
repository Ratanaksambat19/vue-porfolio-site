<template>
    <div skillset-section>
        <div class="skillset-icon">
            <div class="output">
                <div class="output-img">
                    <SkillSetIcon name = 'clock'/>
                </div>
                <div class=" output-text">
                    <h1>OUTPUT</h1>
                    <div class="line"></div>
                    <h3>COMPUTE <br> THE DESIRE OUTPUT</h3>
                </div>
            </div>

            <div class="quality">
                <div class="quality-img">
                    <SkillSetIcon name = 'star'/>
                </div>
                <div class="quality-text">
                    <h1>QUALITY</h1>
                    <div class="line"></div>
                    <h3>QUALITY AND TRUSTY <br> COME FIRST</h3>
                </div>
            </div>

            <div class="deadline">
                <div class="deadline-img">
                    <SkillSetIcon name = 'target'/>
                </div>
                <div class="deadline-text">
                    <h1>DEADLINE</h1>
                    <div class="line"></div>
                    <h3>REALIABLE <br> DEADLINE</h3>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import SkillSetIcon  from '@/components/icon - components/SkillsetsIcon-component.vue'
export default {
    components: {
        SkillSetIcon,
    }
}
</script>

<style lang="scss" scoped>
    $pink: #FD4066;
    $darkgray:  #2a2a2a;
    .skillset-section {
        
    }

    .skillset-icon {
        position: relative;
        border-radius: 25% 25% 0 0;
        background-color: #3C3C3C;
        padding: 0 50px 0 50px;
        z-index: 2;
        display: grid;
        grid-template-columns:  repeat(auto-fit, minmax(350px, 1fr));
        align-items: center;
        justify-items: center;
        margin-top: -10%;
        padding-top: 20px;
        padding-bottom: 30px;
        .line {
            width: 50%;
            height: 2px;
            background-color: $pink;
            margin: 5% 0 5% 0;
        }
        .output {
            display: grid;
            align-items: flex-end;
            justify-items: center;
           
            .output-img {
                
            }

            .output-text {
                display: block;
                text-align: center;
                position: relative;
                top: 20px;
                color: white;

                .line {
                    margin-left: 25%;
                }
            }
        }
        
        .quality {

            .quality-text {
                display: block;
                text-align: center;
                position: relative;
                top: 20px;
                color: white;

                .line {
                    margin-left: 25%;
                }
            }
        }

        .deadline {

            .deadline-text {
                display: block;
                text-align: center;
                position: relative;
                top: 20px;
                color: white;

                .line {
                    margin-left: 25%;
                }
            }
        }

     @media screen and (max-width: 1250px) {
         .skillset-icon {
            //  padding-top: -50%;
         }
     }

    }
</style>