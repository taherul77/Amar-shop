import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="grid gap-4">
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Thw1rdY/men-stylish-shoes-500x500.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/cQrK7kT/usama-akram-g3-CMh2nqj-w-unsplash.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/DL8X3MR/RUNMAGICA-SHOES-Black-EY2975-01-standard.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/LggYkX4/mojtaba-fahiminia-t4g1gct-Aa-Kk-unsplash.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/C2wv2Tq/daniel-storek-JM-q-KEd1-GMI-unsplash.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/sVmV0Qf/FIRST-11-G-787-BLK-MATTLIC-BLU.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/yX9bTgb/d8316f0d-ed91-42c7-bff9-a6dc78a67cab.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/4WQcZmg/alex-quezada-q-Ay-Ot0a-Gs-Co-unsplash.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/511xtk6/AD0671-1.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/N9s0hpP/maksim-larin-NOps-C3n-WTz-Y-unsplash.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/3RkDfFS/610-ILk-K-gt-S-SL1500.jpg" alt=""/>
        </div>
        <div>
            <Image height={500} width={500} class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/YhF7F0f/domino-164-6w-VEHf-I-unsplash.jpg" alt=""/>
        </div>
    </div>
</div>


  )
}

export default Gallery
