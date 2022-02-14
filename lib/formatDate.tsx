export default function formatDatePosted(date: string): string {
  const now = new Date(Date.now());
  const current = new Date(date);
  const diff = now.getTime() - current.getTime();
  let str = " hours ago";
  let time = (diff / 1000 / 60).toFixed(0);
  console.log("time:", time);
  if (time === "0") {
    str = " just now";
    time = str;
    return time;
  }
  time = (diff / 1000 / 60 / 60).toFixed(0);
  if (time === "0") {
    time = (diff / 1000 / 60).toFixed(0);
    str = " mins ago";
  } else {
    str = "hours ago";
    time += str;
  }
  time += str;
  return time;
}
