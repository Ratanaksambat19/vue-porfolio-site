<template>
  <div class="skillset-icon">
    <div class="output" v-scrollanimation>
      <div class="output-img">
        <SkillSetIcon name="target" />
      </div>
      <div class="output-text">
        <h1>OUTPUT</h1>
        <div class="line"></div>
        <h3>
          COMPUTE <br />
          THE DESIRE OUTPUT
        </h3>
      </div>
    </div>

    <div class="quality" v-scrollanimation>
      <div class="quality-img">
        <SkillSetIcon name="star" />
      </div>
      <div class="quality-text">
        <h1>QUALITY</h1>
        <div class="line"></div>
        <h3>
          QUALITY AND TRUSTY <br />
          COME FIRST
        </h3>
      </div>
    </div>

    <div class="deadline" v-scrollanimation>
      <div class="deadline-img">
        <SkillSetIcon name="clock" />
      </div>
      <div class="deadline-text">
        <h1>DEADLINE</h1>
        <div class="line"></div>
        <h3>
          REALIABLE <br />
          DEADLINE
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import SkillSetIcon from "@/components/icon - components/SkillsetsIcon-component.vue";
export default {
  components: {
    SkillSetIcon,
  },
};
</script>

<style lang="scss" scoped>
$pink: #fd4066;
$darkgray: #2a2a2a;

.skillset-icon {
  position: relative;
  border-radius: 25% 25% 0 0;
  background-color: #3c3c3c;
  padding: 0 50px 0 50px;
  display: grid;
  // border: green solid 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
  margin-top: -10%;
  padding-top: 20px;
  padding-bottom: 30px;
  // box-shadow: 0 10px 20px rgb(0, 0, 0), 0 6px 6px rgba(32, 31, 31, 0.911);

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
    transition-delay: 0.3s;
    .output-img {
    }

    .output-text {
      display: block;
      text-align: center;
      position: relative;
      color: white;

      .line {
        margin-left: 25%;
      }
    }
  }

  .quality {
    transition-delay: 0.5s;
    .quality-text {
      display: block;
      text-align: center;
      position: relative;
      color: white;

      .line {
        margin-left: 25%;
      }
    }
  }

  .deadline {
    transition-delay: 0.7s;
    .deadline-img {
      margin-top: 10%;
    }

    .deadline-text {
      display: block;
      text-align: center;
      position: relative;
      color: white;

      .line {
        margin-left: 25%;
      }
    }
  }
}
@media screen and (max-width: 1180px) {
  .skillset-icon {
    margin-top: -20%;
  }

  .output {
    .output-img {
      transform: scale(0.8);
    }

    .output-text {
      font-size: 15px;
    }
  }

  .quality {
    .quality-img {
      transform: scale(0.8);
    }

    .quality-text {
      font-size: 15px;
    }
  }

  .deadline {
    .deadline-img {
      transform: scale(0.8);
    }

    .deadline-text {
      font-size: 15px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .skillset-icon {
    padding: 0%;
    margin-top: -20%;
  }

  .output {
    .output-img {
      transform: scale(0.5);
    }

    .line {
      margin: 10px 0 10px 0;
    }

    .output-text {
      font-size: 10px;
      top: -10%;
    }
  }

  .quality {
    .quality-img {
      transform: scale(0.5);
    }

    .line {
      margin: 10px 0 10px 0;
    }

    .quality-text {
      font-size: 10px;
      top: -10px;
    }
  }

  .deadline {
    .deadline-img {
      transform: scale(0.5);
    }

    .deadline-text {
      font-size: 10px;
      top: -10px;
    }
  }
}

@media screen and (max-width: 600px) {
  .skillset-icon {
    background-color: $darkgray;
    margin-top: -1%;
    border-radius: 0;
    padding: 5% 10% 5% 10%;

    .line {
      margin: 5px 0 5px 0;
    }
  }
  .output {
    background-color: #3c3c3c;
    width: 200px;
    height: 200px;
    margin-bottom: 10%;
    margin-left: -25%;
    border-radius: 50%;
    justify-content: center;
    grid-column: 1;
    padding: 0px;

    .output-img {
      margin-top: -15%;
      transform: scale(0.4);
    }

    .line {
      margin: 5px 0 5px 0;
    }

    .output-text {
      padding: 0px;
      font-size: 8px;
      top: -60px;
    }
  }

  .quality {
    grid-column: 2/3;
    margin-top: 0%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    justify-content: center;
    margin-right: -25%;
    background-color: #3c3c3c;

    .quality-img {
      margin-top: -20%;
      transform: scale(0.38);
    }

    .quality-text {
      font-size: 8px;
      top: -65px;
    }
  }

  .deadline {
    background-color: #3c3c3c;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: -10%;
    grid-column: 1 / 3;

    .deadline-img {
      position: relative;
      top: -20%;
      transform: scale(0.4);
    }

    .deadline-text {
      font-size: 8px;
      top: -95px;
    }
  }
}

.before-enter {
  opacity: 0;
  transform: translateY(100px) scale(0.5);
  transition: all 2s cubic-bezier(0.33, 0.87, 0.62, 0.62);
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>