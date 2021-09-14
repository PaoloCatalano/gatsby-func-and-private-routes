export function get_Method_Time(req) {
  const hour = new Date().getHours()
  const min = new Date().getMinutes()
  const sec = new Date().getSeconds()
  console.log(req.method, hour + ":" + min + ":" + sec)
}
