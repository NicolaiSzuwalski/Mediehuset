import React from 'react'
import { SupabaseProvider, useSupabase } from "../../providers/supabaseProvider";
import { useEffect, useState } from "react";
import styles from "./LineupNav.module.scss"
import { NavLink } from 'react-router-dom';

export const LineupNav = (stageId) => {
    const { supabase } = useSupabase();
    const [data, setData] = useState(null);

    const getStagesData = async () => {
        if(supabase){
            const {data, error} = await supabase.from("stages")
                    .select("id, name, color")
            if(error){
                console.error(error)
            }else{
                console.log(data)
                setData(data)
            }
        }
    }
    useEffect(()=>{
        getStagesData()
    },[supabase])


  return (
    <nav>
        
        <ul>
            <li>ALLE</li>
            {data && data.map(item =>(
                <nav key={item.id}>
                    <ul>
                        <li className={styles.navName} style={{ backgroundColor: item.color }}>
                            <NavLink to={item.id}>{item.name}</NavLink>
                        </li>

                    </ul>
                </nav>
                ))}
        </ul>
    </nav>
  )
}
