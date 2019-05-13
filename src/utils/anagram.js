export const compare = (firstString, secondString) => {
    if (!firstString || !secondString) return null;
    return firstString.toLowerCase().split('').sort().join('').replace(/\s/g, "")
      === secondString.toLowerCase().split('').sort().join('').replace(/\s/g, "");
  };