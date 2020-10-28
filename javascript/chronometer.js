class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(callback) {
    this.intervalId = setInterval (()=>{
      this.currentTime += 1;
    }, 1000);
    if(this.currentTime){callback();} 
  }
  getMinutes() {
    return parseInt(this.currentTime / 60);
  }
  getSeconds() {
    return (this.currentTime % 60);
  }
  twoDigitsNumber(num) {
    num = String(num);
    if (num.length === 1){
      num = "0"+num;
    }
    return num;
  }
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
  }
}
//const chronometer = new Chronometer (1,1);

/*window.addEventListener("load", () => {
  const startBtn = document.querySelector(".start");
  startBtn.addEventListener("click", chronometer.startClick);
});*/