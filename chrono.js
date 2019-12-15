export default function startChrono(cb1, cb2) {
  let time = 10000;

  const countdown = () => {
    if (time === 0) {
      clearInterval(intervalId);
      time = 0;
      cb1();
      return;
    }
    cb2(time);
    time--;
    // seconds remaining until next minute mark
  };
  let intervalId = setInterval(countdown, 1000);
  return intervalId;
}
