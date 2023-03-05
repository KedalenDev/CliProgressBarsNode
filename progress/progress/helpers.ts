const calculateEtaInSeconds = (lastTime: number, total: number, current: number) => {
    const now = Date.now() / 1000;
    const diff = now - lastTime;

    //Get average time per tick
    const distanceLeft = total - current;

    const eta = distanceLeft * diff;

    //Convert to seconds
    return eta.toFixed(2);
}


export { calculateEtaInSeconds }