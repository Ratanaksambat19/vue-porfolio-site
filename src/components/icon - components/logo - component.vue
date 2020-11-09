<template>
    <div class="logo" 
                  :class="logoClass"
                  v-on:mouseover="mouseover" 
                  v-on:mouseleave="mouseleave">
                  
        <svg v-if = "name === 'logo'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="137.21" height="69.15" viewBox="0 0 137.21 69.15">
            <defs>
                <clipPath id="clip-path">
                <rect id="Rectangle_4" data-name="Rectangle 4" class="cls-1" width="137.21" height="69.15" transform="translate(-68.6 -34.58)"/>
                </clipPath>
            </defs>
            <g id="logo_-_V1.0" data-name="logo - V1.0" class="cls-2" transform="translate(68.6 34.58)">
                <path id="Path_2" data-name="Path 2" class="cls-3" d="M0,0H67.15V67.15H0Z" transform="translate(-67.6 -33.58)"/>
                <path id="Path_1" data-name="Path 1" class="cls-1" d="M-30.88-2.68a16.75,16.75,0,0,0,4.36-4.27,9.007,9.007,0,0,0,1.62-5.22,7.128,7.128,0,0,0-3.12-6.1q-3.12-2.25-9.03-2.25h-6.93V-2.68ZM-43.99,21.39h8.35a20.019,20.019,0,0,0,6.95-1.05,13.034,13.034,0,0,0,4.55-2.73,9.793,9.793,0,0,0,2.48-3.76,12.317,12.317,0,0,0,.74-4.2,9.407,9.407,0,0,0-1.05-4.57,8.765,8.765,0,0,0-3-3.18A14.323,14.323,0,0,0-29.64.02,27.728,27.728,0,0,0-35.72-.6h-8.27Z"/>
            </g>
        </svg>

        <svg v-else-if=" name === 'github'" id="github" xmlns="http://www.w3.org/2000/svg" width="43.692" height="41.872" viewBox="0 0 43.692 41.872">
            <g id="github-2" data-name="github" transform="translate(0 0)">
                <path id="github-3" data-name="github" class="cls-1"
                    d="M21.846.5A21.657,21.657,0,0,0,0,21.967,21.5,21.5,0,0,0,14.937,42.335c1.092.2,1.493-.462,1.493-1.032,0-.51-.018-1.861-.027-3.65-6.077,1.294-7.358-2.88-7.358-2.88a5.723,5.723,0,0,0-2.43-3.14c-1.979-1.331.153-1.3.153-1.3a4.57,4.57,0,0,1,3.346,2.212c1.948,3.282,5.114,2.334,6.363,1.786a4.545,4.545,0,0,1,1.384-2.871c-4.852-.537-9.951-2.383-9.951-10.608a8.2,8.2,0,0,1,2.248-5.76,7.511,7.511,0,0,1,.191-5.682s1.83-.575,6.008,2.2a20.946,20.946,0,0,1,10.923,0c4.151-2.776,5.98-2.2,5.98-2.2a7.718,7.718,0,0,1,.218,5.682,8.235,8.235,0,0,1,2.239,5.76c0,8.247-5.106,10.062-9.967,10.59a5.094,5.094,0,0,1,1.475,3.972c0,2.873-.027,5.181-.027,5.878,0,.563.382,1.234,1.5,1.019a21.438,21.438,0,0,0,14.994-20.34A21.66,21.66,0,0,0,21.846.5Z"
                    transform="translate(0 -0.5)" />
            </g>
            <g id="Group_68" data-name="Group 68">
                <circle id="Ellipse_3" data-name="Ellipse 3" class="cls-2" cx="2" cy="2" r="2"
                    transform="translate(15.692 17)" />
                <circle id="Ellipse_4" data-name="Ellipse 4" class="cls-2" cx="2" cy="2" r="2"
                    transform="translate(23.692 17)" />
            </g>
        </svg>

        <button v-else-if=" name === 'burger'" class="menu" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
        <svg width="60" height="90" viewBox="0 0 100 100">
            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path class="line line2" d="M 20,50 H 80" />
            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: ['name'],
    data() {
      return {
        logoClass: []
      }
    },

    methods: {
      mouseover:function() {
        console.log('In');
        this.logoClass = ['animate__animated', 'animate__infinite	infinite','animate__pulse']
      },

      mouseleave:function() {
        console.log('out');
        this.logoClass = []
      }
    }
}
</script>

 <style>
    .logo{
    animation-delay: 0.1s;
    
    animation-duration: 5s;
    }
    
    .cls-1, .cls-4 {
        fill: #fff;
    }

    .cls-2 {
        clip-path: url(#clip-path);
    }

    .cls-3 {
        fill: none;
        stroke: #fd4066;
        stroke-width: 2px;
    }

    .cls-1,
    .cls-2 {
        fill: #fd4066;
    }
    #Group_68 {
        opacity: 0;
    }
    svg:hover #Group_68{
        animation-duration: 0.7s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-name: animateEye;
    }

    @keyframes animateEye {
        from{
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .menu {
        background-color:  transparent;
        border: none;
        cursor: pointer;
        display: flex;
        padding: 0;
        outline: none;
        }
        .line {
        fill: none;
        stroke:  #f37272;
        stroke-width: 5;
        transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .line1 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
        }
        .line2 {
        stroke-dasharray: 60 60;
        stroke-width: 6;
        }
        .line3 {
        stroke-dasharray: 60 207;
        stroke-width: 6;
        }
        .opened .line1 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
        }
        .opened .line2 {
        stroke-dasharray: 1 60;
        stroke-dashoffset: -30;
        stroke-width: 6;
        }
        .opened .line3 {
        stroke-dasharray: 90 207;
        stroke-dashoffset: -134;
        stroke-width: 6;
    }

</style>