<template>
    <div skillset-section>
        <div class="skillset-icon">
            <div class="output">
                <div class="output-img">
                    <SkillSetIcon name = 'clock'/>
                </div>
                <div class="output-text">

                </div>
            </div>

            <div class="quality">
                <div class="quality-img">
                    <SkillSetIcon name = 'star'/>
                </div>
                <div class="quality-text">
                    
                </div>
            </div>

            <div class="deadline">
                <div class="deadline-img">
                    <SkillSetIcon name = 'target'/>
                </div>
                <div class="deadline-text">
                    
                </div>
            </div>
        </div>
        
        <div class="skill-set-bg">
            <SkillSetIcon class="skill-set" name = 'skillbg' />
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
    .skillset-section {
        display: flex;
    }

    .skill-set-bg {
        
        margin-top: -20%;
        margin-left: -14%;

        .skill-set {
            transform: scale(0.8);
            position: absolute;
            z-index: 1;
        
        
    }
    }
    
    
    .skillset-icon {
        position: relative;
        z-index: 2;
        display: grid;
        grid-template-columns:  repeat(auto-fit, minmax(350px, 1fr));
        align-items: center;
        justify-items: center;
        margin-top: -10%;
        // padding-top: 20px;
        
        .output {
            
        }
        
        .quality {
            
        }

        .deadline {
            
        }

    }
</style>