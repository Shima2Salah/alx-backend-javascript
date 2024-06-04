export default function getStudentsByLocation(argument, city) {
  if (!Array.isArray(argument)) {
    return [];
  }
  return argument.filter((a) => a.location === city);
}
