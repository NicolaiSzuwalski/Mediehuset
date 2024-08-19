import { SupabaseProvider, useSupabase } from "../../providers/supabaseProvider";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import React from 'react'
import styles from './News.module.scss'


export const News = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState(null);

    const getNewsData = async () => {
        if(supabase){
            const {data, error} = await supabase.from("news")
                    .select("title, id, teaser, content, author, images(*)")
            if(error){
                console.error(error)
            }else{
                console.log(data)
                setData(data)
            }
        }
    }
    useEffect(()=>{
        getNewsData()
    },[supabase])

  return (
    <div className={styles.news}>
    <h1>NYHEDER</h1>
    {data && data.slice(0, 3).map(item => (
        <div key={item.id} className={styles.cards}>
            <div className={styles.teaserContainer}>
                <div>
                    <img src={item.images.filename} alt={item.title} />
                </div>
                <article>
                    <h3>
                        {item.title}
                    </h3>
                    {item.teaser}
                    <button>LÆS MERE</button>
                </article>
                
            </div>
            
            <div className={styles.ticket}>
                <h4>
                    FÅ BILLETTER TILBAGE
                </h4>
                <h2>KØB
                     <br/>
                HER</h2>
                
            </div>

        </div>
    ))}
</div>
  )
}
