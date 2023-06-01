import { getStoredCart } from "../Utilitis/fakeDB"

export const appliedJobData = async ()=>
{
    const appliedData = await fetch('/jobs.json')
    const applied = await appliedData.json()
    const savedData = getStoredCart()

    let cartArray = []

    for(const id in savedData){
        const foundApplied = applied.find(job => job.jobId === id)

        if(foundApplied){
            cartArray.push(foundApplied)
        }
    }
    return {cartArray, applied};
}