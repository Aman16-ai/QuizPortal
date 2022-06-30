import { Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import END_POINT from '../../../config/Api'
import Question from './Question'
import "./css/play.css"
export default function Play() {
    const params = useParams()
    const [quiz, setQuiz] = useState({})
    const [category, setCategory] = useState("")
    const [data,setData] = useState({})
    const [index,setIndex] = useState(0)
    const fetchQuiz = async () => {
        try {
            let url = `${END_POINT}/quiz/getQuizById/${params.id}`
            const reponse = await fetch(url)
            const data = await reponse.json();
            console.log(data)
            setQuiz(data.quiz)
            setData(data.quiz.questionsAndAnswers[index])
        }
        catch (err) {
            console.log(err)
        }
    }
    const fetchCategory = async () => {
        let url = `${END_POINT}/category/getCategoryById`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "id": quiz.category })
        })
        const data = await response.json();
        setCategory(data.category.name)

    }
    useEffect(() => {
        fetchQuiz()
    }, [])

    // useEffect(() => {
    //     fetchCategory()
    // }, [quiz])

    return (
        <div className='container'>
            <Question index={index} setIndex={setIndex} data={data} />   
            
        </div>

    )
}
