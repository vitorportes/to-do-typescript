export function timeToSeconds(time: string): number {
  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");
  const hoursToSeconds = Number(hours) * 3600;
  const minutesToSeconds = Number(minutes) * 60;
  const totalSeconds = hoursToSeconds + minutesToSeconds + Number(seconds);

  return totalSeconds;
}

export function secondsToMinutesAndSeconds(seconds: number): number[] {
  const minutos = Math.floor(seconds / 60);
  const segundos = seconds % 60;

  return [minutos, segundos];
}
