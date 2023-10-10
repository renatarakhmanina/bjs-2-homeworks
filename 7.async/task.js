class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    } else if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  }

  removeClock(time) {
    return this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }
  
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
  
  start() {
    if (this.intervalId) {
      return;
    }
    const currentTime = this.getCurrentFormattedTime();
    const scheduleCall = () => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }
    this.intervalId = setInterval(scheduleCall, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
