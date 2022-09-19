import mcache from 'memory-cache';

export default class MemoryCache {
    public static isCachedData(key:string,data:any,expiresInMilliseconds:number):boolean {
        const cachedData = mcache.get(key);
        if(cachedData && JSON.stringify(cachedData) === JSON.stringify(data)) return true;
        mcache.put(key, data, expiresInMilliseconds);
        return false;
    }
}