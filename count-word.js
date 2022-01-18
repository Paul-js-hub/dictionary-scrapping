exports.countWord = string => {
    let obj = {}
    const words = string.split(" ").filter(word => word !== "").sort();
  
    for (let i = 0; i < words.length; i++) {
      const item = words[i]
      obj[item] = (obj[item] + 1) || 1
    }
  
    return obj
  }