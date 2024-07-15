function runAfterOneSec(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfterOneSec(() => console.log("Runned After One Sec"));
