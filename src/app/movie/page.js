import MovieCard from "../components/MovieCard";
import styles from "../styles/common.module.css" ;

export default async function Movie() {

	const url = process.env.RAPIDAPI;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4ce5c0d0b2msh5b25679812e1166p1055ddjsnbefdc9097cb6',
			'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
		}
	};


		const response = await fetch(url, options);
		const result = await response.json();
	    let  main_data = result.titles;


	
	return (
		<>
		    <section className={styles.movieSelection}>
				<div className={styles.container}>
					<h1>Series & Movie</h1>
					<div className={styles.card_section}>
					{
						 main_data.map((currElem) =>{
							 return <MovieCard key={currElem.id} {...currElem} />
						 })
					 }
					</div>
					
				</div>
			</section>
		</>
	)
}