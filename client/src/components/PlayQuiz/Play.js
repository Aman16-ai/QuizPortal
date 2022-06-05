import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import END_POINT from '../../config/Api'
export default function Play() {
    const params = useParams()
    const [quiz,setQuiz] = useState([])

    const fetchQuiz = async()=> {
        try {
            let url = `${END_POINT}/quiz/getQuizById/${params.id}`
        const reponse = await fetch(url)
        const data = await reponse.json();
        console.log(data)
        setQuiz(data.quiz)
        }
        catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchQuiz()
    },[] )
    
    return (
        <div>

            

        </div>

    )
}
