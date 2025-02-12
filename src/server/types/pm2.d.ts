export interface IPM2List {
    pid: number, 
    name: string,
    pm_id: number,
    monit: { memory: number, cpu: number }
    // pm2_env: object
}