export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.loader {
    width: 92.2px;
    height: 92.2px;
    background: linear-gradient(#042a44 0 0) bottom/100% 0% no-repeat #dbdcef;
    -webkit-mask: radial-gradient(circle at 60% 65%, #000 62%, #0000 65%) top left, 
           radial-gradient(circle at 40% 65%, #000 62%, #0000 65%) top right, 
           linear-gradient(to bottom left, #000 42%,#0000 43%) bottom left , 
           linear-gradient(to bottom right,#000 42%,#0000 43%) bottom right;
    -webkit-mask-size: 50% 50%;
    -webkit-mask-repeat: no-repeat;
    animation: progress-ofy9at 1.2s infinite linear;
 }
 
 @keyframes progress-ofy9at {
    90%, 100% {
       background-size: 100% 100%;
    }
 }`;