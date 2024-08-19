import { SupabaseProvider, useSupabase } from "../../providers/supabaseProvider";
import { useEffect, useState } from "react";
import React from 'react'
import styles from './Lineup.module.scss'
import { LineupNav } from "../LineupNav/LineupNav";
import { useParams } from "react-router-dom";


export const Lineup = () => {
    const { supabase } = useSupabase();
    const [data, setData] = useState(null);
    const {id} = useParams()

    const getEventsData = async () => {
        if(supabase){
            const { data, error } = id ? await supabase.from("events")
                .select("title, id, datetime, stage_id, description, type_id, images(*)")
                .eq('stage_id', id) : 
                await supabase.from("events")
                    .select("title, id, datetime, stage_id, description, type_id, images(*)")

            if(error) {
                console.error(error)
            } else {
                console.log(data)
                setData(data)
            }
        }
    }
    useEffect(()=>{
        getEventsData()
    },[supabase,id])
    return(
        <section className={styles.lineup}>
            <h1>LINEUP</h1>
            <LineupNav/>
            
        </section>
    )
    
}